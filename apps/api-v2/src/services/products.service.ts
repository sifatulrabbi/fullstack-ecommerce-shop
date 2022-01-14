import {IProduct, IProductDoc} from "../interfaces";
import {productsModel} from "../models";
import {config} from "../configs";

export async function getProducts(): Promise<IProductDoc[]> {
    const products = await productsModel.find({}, "_id name summary price");
    return products;
}

export async function getProduct(id: string): Promise<IProductDoc | null> {
    try {
        const product = await productsModel.findById(id);
        return product;
    } catch (err) {
        if (!config.PROD) {
            console.error(err);
        }

        return null;
    }
}

export async function createProduct(
    productDto: Omit<IProduct, "_id">
): Promise<IProductDoc | null> {
    try {
        const productDoc = new productsModel(productDto);
        const newProduct = productDoc.save();
        return newProduct;
    } catch (err) {
        if (!config.PROD) {
            console.error(err);
        }

        return null;
    }
}

export async function updateProduct(
    id: string,
    productDto: Omit<IProduct, "_id">
): Promise<IProductDoc | null> {
    try {
        const product = await getProduct(id);

        if (!product) {
            return null;
        }

        const updatedProduct = await productsModel.findByIdAndUpdate(
            productDto
        );
        return updatedProduct;
    } catch (err) {
        if (!config.PROD) {
            console.error(err);
        }

        return null;
    }
}

export async function removeProduct(id: string): Promise<string | null> {
    try {
        const product = await getProduct(id);

        if (!product) {
            return null;
        }

        await product.remove();
        return "Product removed";
    } catch (err) {
        if (!config.PROD) {
            console.log(err);
        }

        return null;
    }
}
