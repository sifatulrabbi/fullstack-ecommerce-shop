import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    BadRequestException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller({ version: "1", path: "users" })
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<IUserDocument> {
        try {
            return this.usersService.create(createUserDto);
        } catch (err: unknown) {
            throw new BadRequestException(String(err));
        }
    }

    @Get()
    findAll(): Promise<IUserDocument[]> {
        return this.usersService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<string> {
        return this.usersService.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<string> {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<string> {
        return this.usersService.remove(id);
    }
}
