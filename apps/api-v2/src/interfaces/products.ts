import {Document} from "mongoose";

export interface IProduct {
    _id?: string;
    name: string;
    summary: string;
    description: string;
    price: number;
    discount: {
        active: boolean;
        amount: number;
        end: number;
    };
}

export type IProductDoc = IProduct & Document;
