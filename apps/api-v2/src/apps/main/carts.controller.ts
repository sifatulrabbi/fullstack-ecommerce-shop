import {Request, Response, Router} from "express";
import {CustomResponse} from "../../libs";

const cartsController = Router();

cartsController.post("/", async (req: Request, res: Response) => {
    if (!req.body.user_id || !req.body.products) {
        CustomResponse.notFound(
            res,
            "Invalid data",
            "Body should contain these fields: {user_id, products}"
        );
        return;
    }

    CustomResponse.created(res, "Post in cart router");
});

cartsController.put("/:id/products", async (req: Request, res: Response) => {
    if (!req.body.products) {
        CustomResponse.notFound(res, "Invalid data", "No products field found");
        return;
    }

    CustomResponse.ok(res, "Put in cart router");
});

cartsController.delete("/:id/products", async (req: Request, res: Response) => {
    CustomResponse.ok(res, "Delete in carts products");
});

export {cartsController};
