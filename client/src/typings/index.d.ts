import { theme } from '../theme';

export declare type ITheme = typeof theme;

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IShop {
  _id: string;
  name: string;
  email: string;
  owner_id: string;
  desc?: string;
  cats: string[];
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  desc: string;
  cats: string[];
  shop_id: string;
  img?: string;
  discount?: number;
  disc_price?: number;
}
