import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<string> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<string> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<string> {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<string> {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<string> {
        return this.usersService.remove(+id);
    }
}
