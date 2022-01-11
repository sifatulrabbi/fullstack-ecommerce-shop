import {IProduct, IProductDoc} from "../interfaces";
import {productsModel} from "../models";

export async function getProducts(
    tag?: string[],
    discount?: boolean
): Promise<IProductDoc[]> {
    const products = await productsModel.find({});
    return products;
}

export async function getProduct(id: string): Promise<IProductDoc | null> {
    const product = await productsModel.findById(id);
    return product;
}

export async function createProduct(
    productDto: Omit<IProduct, "_id">
): Promise<IProductDoc> {
    const productDoc = new productsModel(productDto);
    const newProduct = productDoc.save();
    return newProduct;
}

export async function updateProduct(
    id: string,
    productDto: Omit<IProduct, "_id">
): Promise<IProductDoc | null> {
    const product = await getProduct(id);

    if (!product) {
        return null;
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(productDto);
    return updatedProduct;
}

export async function removeProduct(id: string): Promise<string | null> {
    const product = await getProduct(id);

    if (!product) {
        return null;
    }

    await product.remove();
    return "Product removed";
}
