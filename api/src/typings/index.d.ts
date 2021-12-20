import { Document, Types } from 'mongoose';

declare global {
  interface IUser {
    _id: Types.ObjectId;
    email: string;
    password: string;
    name: string;
  }

  type IUserDocument = IUser & Document;
}
