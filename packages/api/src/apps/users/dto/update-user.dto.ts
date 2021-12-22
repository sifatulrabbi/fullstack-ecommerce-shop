import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsString, IsEmail, MaxLength, MinLength, IsOptional } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @IsOptional()
  email?: string | undefined;

  @MaxLength(50)
  @IsString()
  @IsOptional()
  name?: string | undefined;

  @MinLength(8)
  @IsString()
  @IsOptional()
  password?: string | undefined;

  @MinLength(8)
  @IsString()
  @IsOptional()
  confirm_password?: string | undefined;
}
