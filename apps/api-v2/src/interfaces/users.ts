import {Document} from "mongoose";
import {IAddress} from "./address";

export interface IUser {
    _id?: string;
    username: string;
    password: string;
    profile: {
        name: {
            first: string;
            last: string;
        };
        mobile: number;
        currency: "USD" | "EUR" | "BDT";
        address: IAddress;
    };
}

export type IUserDoc = IUser & Document;

export interface IUserDto {
    username: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    mobile: string;
    currency: "USD" | "EUR" | "BDT";
    country: string;
    province: string;
    city: string;
    area: string;
    street: string;
    zip_code: string;
}
