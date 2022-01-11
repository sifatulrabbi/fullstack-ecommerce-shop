import {Request, Response, Router} from "express";
import {getProduct, getProducts} from "../services/products.service";

const productsRouter = Router();

productsRouter.get("/products", async (req: Request, res: Response) => {
    const products = await getProducts();
    res.status(200).json({status: "success", data: {products}});
    res.status(200).json({message: "Hello world"});
});

productsRouter.get("/products/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await getProduct(productId);
    res.status(200).json({status: "success", data: {products: [product]}});
});

export {productsRouter};
