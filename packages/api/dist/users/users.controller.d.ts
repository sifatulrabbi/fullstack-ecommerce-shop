import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<IUserView>;
    findAll(): Promise<IUserView[]>;
    findOne(id: string): Promise<IUserView>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<IUserView>;
    remove(id: string): Promise<string>;
}
