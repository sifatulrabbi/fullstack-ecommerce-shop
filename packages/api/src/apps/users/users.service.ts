import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel("users")
    private readonly usersModel: Model<IUserDocument>,
  ) {}

  trimUser(user: IUserDocument): IUserView {
    return {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<IUserView> {
    const newUser: IUserDocument = new this.usersModel({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    const user: IUserDocument = await newUser.save();
    return this.trimUser(user);
  }

  async findAll(): Promise<IUserView[]> {
    const users: IUserView[] = await this.usersModel.find({}, "_id email name");
    return users;
  }

  async findOne({ id, email }: { id?: string; email?: string }): Promise<IUserDocument | null> {
    try {
      const user: IUserDocument | null = id
        ? await this.usersModel.findById(id)
        : email
        ? await this.usersModel.findOne({ email })
        : null;

      return user;
      // return { user, trimmedUser: this.trimUser(user) };
    } catch (err) {
      throw new BadRequestException(`Unable to find the user. ${String(err)}`);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUserView> {
    const user: IUserDocument | null = await this.usersModel.findByIdAndUpdate(
      id,
      {
        email: updateUserDto.email,
        name: updateUserDto.name,
        password: updateUserDto.password,
      },
      { new: true },
    );

    if (!user) {
      throw new BadRequestException("Unable to update user please try again later");
    }

    return this.trimUser(user);
  }

  async remove(id: string): Promise<string | null> {
    const user = await this.findOne({ id });
    if (!user) {
      return null;
    }
    user.remove();
    return `User ${user.name} has been removed`;
  }
}
