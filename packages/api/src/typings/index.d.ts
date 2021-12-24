import { Document } from "mongoose";

declare global {
  interface IUser {
    _id?: string;
    email: string;
    password: string;
    name: string;
  }

  type IUserDocument = IUser & Document;

  type IUserView = Omit<IUser, "password">;

  declare namespace ENUMS {
    enum Role {
      User = "user",
      Admin = "admin",
    }
  }
}
