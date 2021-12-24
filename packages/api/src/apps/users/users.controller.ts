import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard, UserEmailGuard } from "../../common/guards";
import { TransformPasswordInterceptor, TransformUserInterceptor } from "../../common/interceptors";

@Controller({ version: "1", path: "users" })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(UserEmailGuard)
  @UseInterceptors(TransformPasswordInterceptor, TransformUserInterceptor)
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IUserView> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<IUserView[]> {
    return this.usersService.findAll();
  }

  @UseInterceptors(TransformUserInterceptor)
  @Get(":id")
  findOne(@Param("id") id: string): Promise<IUserDocument | null> {
    return this.usersService.findOne({ id });
  }

  @UseGuards(UserEmailGuard, JwtAuthGuard)
  @UseInterceptors(TransformUserInterceptor)
  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<IUserView> {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string): Promise<string | null> {
    return this.usersService.remove(id);
  }
}
