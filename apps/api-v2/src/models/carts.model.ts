import * as mongoose from "mongoose";
import {ICart} from "../interfaces/cart";

const cartsSchema = new mongoose.Schema<ICart>({
    user_id: {type: String, required: true},
    products: {type: [String], required: true},
    address: {
        country: {type: String, required: true},
        province: {type: String, required: true},
        city: {type: String, required: true},
        zip_code: {type: Number, required: true},
    },
    total: {
        total_price: {type: String, required: true},
        delivery_charge: {type: String, required: true},
        cart_total: {type: Number, required: true},
    },
});

export const cartsModel = mongoose.model<ICart>("carts", cartsSchema);
