import {Request, Response, Router} from "express";
import {
    createProduct,
    updateProduct,
    removeProduct,
} from "../../services/products.service";
import {CustomResponse} from "../../libs";

const productsRouter = Router();

productsRouter.post("/", async (req: Request, res: Response) => {
    const {name, summary, description, price, discount} = req.body;
    const product = createProduct({
        name,
        summary,
        description,
        price,
        discount,
    });

    CustomResponse.ok(res, "Success", [product]);
});

productsRouter.put("/:id", async (req: Request, res: Response) => {
    const {name, summary, description, price, discount} = req.body;
    const productId = req.params.id;
    const product = await updateProduct(productId, {
        name,
        summary,
        description,
        price,
        discount,
    });

    if (!updateProduct) {
        CustomResponse.notFound(
            res,
            "Not found",
            "No product found with the id"
        );
        return;
    }

    CustomResponse.ok(res, "Product updated", [product]);
});

productsRouter.delete("/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    const message = await removeProduct(productId);

    if (!message) {
        CustomResponse.notFound(
            res,
            "Not found",
            "No product found with the id"
        );
    }

    CustomResponse.ok(res, "Product removed");
});

export {productsRouter};
