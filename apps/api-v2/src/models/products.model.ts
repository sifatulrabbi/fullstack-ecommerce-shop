import * as mongoose from "mongoose";
import {IProduct} from "../interfaces";

const productsSchema = new mongoose.Schema<IProduct>(
    {
        name: {type: String, required: true},
        summary: {type: String, required: true, maxlength: 200},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        tags: {type: [String], required: true},
    },
    {
        timestamps: true,
        autoCreate: false,
    }
);

export const productsModel = mongoose.model<IProduct>(
    "products",
    productsSchema
);
