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
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new BadRequestException("Password and Confirm Password doesn't match");
    }

    if (await this.usersModel.findOne({ email: createUserDto.email })) {
      throw new BadRequestException("Email already taken");
    }

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

  async findOne({
    id,
    email,
  }: {
    id?: string;
    email?: string;
  }): Promise<{ user: IUserDocument; trimmedUser: IUserView }> {
    const user: IUserDocument | null = id
      ? await this.usersModel.findById(id)
      : email
      ? await this.usersModel.findOne({ email })
      : null;

    if (!user) {
      throw new NotFoundException("User not found");
    }
    return { user, trimmedUser: this.trimUser(user) };
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUserView> {
    if (!(await this.usersModel.findById(id))) {
      throw new NotFoundException("User not found");
    }

    if (
      updateUserDto.password &&
      updateUserDto.confirm_password &&
      updateUserDto.password !== updateUserDto.confirm_password
    ) {
      throw new BadRequestException("Password and Confirm Password doesn't match");
    }

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

  async remove(id: string): Promise<string> {
    await this.usersModel.findByIdAndRemove(id).catch((err) => {
      throw new BadRequestException(String(err));
    });
    return "User removed";
  }
}
