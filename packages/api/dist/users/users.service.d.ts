import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<IUserDocument>);
    trimUser(user: IUserDocument): IUserView;
    create(createUserDto: CreateUserDto): Promise<IUserView>;
    findAll(): Promise<IUserView[]>;
    findOne({ id, email, }: {
        id?: string;
        email?: string;
    }): Promise<{
        user: IUserDocument;
        trimmedUser: IUserView;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<IUserView>;
    remove(id: string): Promise<string>;
}
