import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Product implements Omit<IProduct, "_id"> {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  summary!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  price!: number;

  @Prop({ required: true })
  tags!: string[];

  @Prop({ type: Object, required: true })
  discount!: {
    active: boolean;
    price?: number | undefined;
    start?: number | undefined;
    end?: number | undefined;
  };
}

export const productsSchema = SchemaFactory.createForClass(Product);
