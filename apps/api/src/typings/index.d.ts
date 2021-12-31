import { Document } from "mongoose";

declare global {
  declare namespace ENUMS {
    enum Role {
      User = "user",
      Admin = "admin",
    }
  }

  interface IUser {
    _id?: string;
    email: string;
    password: string;
    name: string;
    shop_id?: string;
  }

  type IUserDocument = IUser & Document;

  type IUserView = Omit<IUser, "password">;

  interface IShop {
    _id?: string;
    owner_id?: string;
    name: string;
    description: string;
    categories: string[];
    products?: string[];
  }

  type IShopDocument = IShop & Document;

  interface IProduct {
    _id: string;
    name: string;
    summary: string;
    description: string;
    price: number;
    tags: string[];
    discount: {
      active: boolean;
      price?: number;
      start?: number;
      end?: number;
    };
  }

  type IProductDocument = IProduct & Document;

  namespace Express {
    interface Request {
      users?: IUserView;
    }
  }
}
