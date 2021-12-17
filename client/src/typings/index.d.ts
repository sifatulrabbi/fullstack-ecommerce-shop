import { theme } from '../theme';

export declare type ITheme = typeof theme;

interface IUser {
  _id: string;
  name: string;
  email: string;
}

interface IShop {
  _id: string;
  name: string;
  email: string;
  owner_id: string;
  desc?: string;
  cats: string[];
}

interface IProduct {
  _id: string;
  name: string;
  price: number;
  desc: string;
  cats: string[];
  shop_id: string;
  discount?: number;
  disc_price?: number;
}
