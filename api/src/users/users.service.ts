import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users')
        private readonly usersModel: Model<IUserDocument>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<string> {
        return 'This action adds a new user';
    }

    async findAll(): Promise<string> {
        return `This action returns all users`;
    }

    async findOne(id: number): Promise<string> {
        return `This action returns a #${id} user`;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<string> {
        return `This action updates a #${id} user`;
    }

    async remove(id: number): Promise<string> {
        return `This action removes a #${id} user`;
    }
}
