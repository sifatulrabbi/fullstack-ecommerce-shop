import {Request, Router, Response} from "express";
import {CustomResponse} from "../../libs";

const ordersController = Router();

ordersController.get("/", async (req: Request, res: Response) => {
    CustomResponse.ok(res, "From orders controller");
});

export {ordersController};
