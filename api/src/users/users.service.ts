import { Injectable } from "@nestjs/common";
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

    async create(createUserDto: CreateUserDto): Promise<IUserDocument> {
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw "Password and Confirm Password doesn't match";
        }

        const newUser: IUserDocument = new this.usersModel({
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password,
        });

        const user: IUserDocument = await newUser.save();
        return user;
    }

    async findAll(): Promise<IUserDocument[]> {
        const users: IUserDocument[] = await this.usersModel.find({});

        return users;
    }

    async findOne(id: string): Promise<string> {
        return `This action returns a #${id} user`;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
        if (
            updateUserDto.password &&
            updateUserDto.confirm_password &&
            updateUserDto.password !== updateUserDto.confirm_password
        ) {
            throw "Password and Confirm Password doesn't match";
        }

        return `This action updates a #${id} user`;
    }

    async remove(id: string): Promise<string> {
        return `This action removes a #${id} user`;
    }
}
