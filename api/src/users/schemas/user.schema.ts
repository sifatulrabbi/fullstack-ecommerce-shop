import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
// import { IsString, IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

@Schema({ timestamps: true })
export class User implements IUser {
    @Prop({ required: true, type: Types.ObjectId, auto: true })
    _id!: Types.ObjectId;

    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ required: true })
    password!: string;

    @Prop({ required: true })
    name!: string;
}

export const userSchema = SchemaFactory.createForClass(User);
