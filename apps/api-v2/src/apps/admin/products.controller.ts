import {Request, Response, Router} from "express";
import {
    createProduct,
    updateProduct,
    removeProduct,
    getProducts,
} from "../../services/products.service";
import {CustomResponse} from "../../libs";
import {createProductValidator} from "../../validators";

const productsController = Router();

productsController.get("/", async (req: Request, res: Response) => {
    const products = await getProducts();
    CustomResponse.ok(res, "Products found", products);
});

productsController.post(
    "/",
    createProductValidator,
    async (req: Request, res: Response) => {
        const product = await createProduct(req.body);

        CustomResponse.ok(res, "Product created", [product]);
    }
);

productsController.put("/:id", async (req: Request, res: Response) => {
    const product = await updateProduct(req.params.id, req.body);

    if (!product) {
        CustomResponse.notFound(
            res,
            "Product not found",
            "No product found with the id"
        );
        return;
    }

    CustomResponse.ok(res, "Product updated", [product]);
});

productsController.delete("/:id", async (req: Request, res: Response) => {
    const message = await removeProduct(req.params.id);

    if (!message) {
        CustomResponse.notFound(
            res,
            "Product not found",
            "No product found with the id"
        );
    }

    CustomResponse.ok(res, "Product removed");
});

export {productsController};
