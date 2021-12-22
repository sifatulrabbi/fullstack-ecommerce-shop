import { CreateUserDto } from "./create-user.dto";
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    email?: string | undefined;
    name?: string | undefined;
    password?: string | undefined;
    confirm_password?: string | undefined;
}
export {};
