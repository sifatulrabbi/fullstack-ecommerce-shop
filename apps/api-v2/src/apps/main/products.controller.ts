import {Request, Response, Router} from "express";
import {getProduct, getProducts} from "../../services/products.service";
import {CustomResponse} from "../../libs";

const productsRouter = Router();

productsRouter.get("/", async (req: Request, res: Response) => {
    const products = await getProducts();
    CustomResponse.ok(res, "Success", products);
});

productsRouter.get("/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await getProduct(productId);

    if (!product) {
        CustomResponse.notFound(
            res,
            "Not found",
            "No product found with the id"
        );
        return;
    }

    CustomResponse.ok(res, "Success", [product]);
});

export {productsRouter};
