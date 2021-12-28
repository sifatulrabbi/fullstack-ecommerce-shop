import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class UpdateShopDto extends PartialType(CreateUserDto) {}
