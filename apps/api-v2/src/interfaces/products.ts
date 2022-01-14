import {Document} from "mongoose";

export interface IProduct {
    _id?: string;
    name: string;
    summary: string;
    description: string;
    price: number;
    tags: string[];
}

export type IProductDoc = IProduct & Document;
