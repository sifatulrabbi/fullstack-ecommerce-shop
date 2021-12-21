import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// import { IsString, IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ required: true })
    password!: string;

    @Prop({ required: true })
    name!: string;
}

export const userSchema = SchemaFactory.createForClass(User);
