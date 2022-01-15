import {Document} from "mongoose";
import {IAddress} from "./address";

export interface ICart {
    _id?: string;
    user_id: string;
    products: {
        _id: string;
        name: string;
        price: number;
        amount: number;
    }[];
    address: IAddress;
    total: {
        total_price: number;
        delivery_charge: number;
        cart_total: number;
    };
}

export type ICartDoc = ICart & Document;
