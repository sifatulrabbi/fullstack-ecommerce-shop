import { IsNotEmpty, IsString, IsArray, IsOptional } from "class-validator";

export class CreateShopDto implements IShop {
  @IsString()
  @IsNotEmpty()
  owner_id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsArray()
  @IsNotEmpty()
  categories!: string[];

  @IsArray()
  @IsOptional()
  products?: string[] | undefined;
}
