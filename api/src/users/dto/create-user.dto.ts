import { IsNotEmpty, IsString, IsEmail, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    name!: string;

    @MinLength(8)
    @IsString()
    @IsNotEmpty()
    password!: string;

    @MinLength(8)
    @IsString()
    @IsNotEmpty()
    confirm_password!: string;
}
