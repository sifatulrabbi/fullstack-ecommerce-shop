import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Shop implements IShop {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  owner_id!: string | undefined;

  @Prop({ required: true })
  description!: string;

  @Prop({ type: [String], required: true })
  categories!: string[];

  @Prop({ type: [String] })
  products?: string[];
}

export const shopsSchema = SchemaFactory.createForClass(Shop);
