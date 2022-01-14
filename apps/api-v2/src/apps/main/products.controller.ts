import {Request, Response, Router} from "express";
import {getProduct, getProducts} from "../../services/products.service";
import {CustomResponse} from "../../libs";

const productsController = Router();

productsController.get("/", async (req: Request, res: Response) => {
    const products = await getProducts();
    CustomResponse.ok(res, "Success", products);
});

productsController.get("/:id", async (req: Request, res: Response) => {
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

export {productsController};
