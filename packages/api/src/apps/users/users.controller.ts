import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  BadRequestException,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../../common/guards";
import { TransformUserInterceptor } from "../../common/interceptors";

@Controller({ version: "1", path: "users" })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(TransformUserInterceptor)
  @Post()
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto): Promise<IUserView> {
    if (res.locals.foundUser) {
      throw new BadRequestException("Email already taken");
    }

    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<IUserView[]> {
    return this.usersService.findAll();
  }

  @UseInterceptors(TransformUserInterceptor)
  @Get(":id")
  findOne(@Param("id") id: string): Promise<IUserDocument> {
    return this.usersService.findOne({ id });
  }

  @UseInterceptors(TransformUserInterceptor)
  @UseGuards(JwtAuthGuard)
  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<IUserView> {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.usersService.remove(id);
  }
}
