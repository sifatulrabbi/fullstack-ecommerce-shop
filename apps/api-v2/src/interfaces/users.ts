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
