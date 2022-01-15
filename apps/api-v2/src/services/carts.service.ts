import {cartsModel} from "../models";
import {config} from "../configs";
import {getFullUser} from "./users.service";
import {getProduct} from "./products.service";

export async function getCart(userId: string) {
    try {
        const cart = await cartsModel.findOne({user_id: userId});
        return cart;
    } catch (err) {
        if (!config.PROD) {
            console.error(err);
        }

        return null;
    }
}

export async function createCart(userId: string, productId: string) {
    try {
        const user = await getFullUser(userId);
        const product = await getProduct(productId);

        if (!user || !product) {
            return null;
        }

        const cart = await new cartsModel({
            user_id: userId,
            products: [
                {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    amount: 1,
                },
            ],
            address: user.address,
            total: {
                total_price: product.price,
                delivery_charge: 20,
                cart_total: product.price + 20,
            },
        });
        return cart;
    } catch (err) {
        if (!config.PROD) {
            console.error(err);
        }

        return null;
    }
}
