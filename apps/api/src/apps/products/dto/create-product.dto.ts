import { IsString, IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateProductDto implements Omit<IProduct, "_id" | "shop_id"> {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  name!: string;

  @MaxLength(200)
  @IsString()
  @IsNotEmpty()
  summary!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  tags!: string[];

  @IsNotEmpty()
  discount!: {
    active: boolean;
    start?: number;
    end?: number;
    price?: number;
  };
}
