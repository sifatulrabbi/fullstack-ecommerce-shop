import {Request, Response, NextFunction} from "express";
import {IProduct} from "../interfaces";
import {CustomResponse} from "../libs";

export function createProductValidator(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const body: IProduct = req.body;

    if (
        !body.name ||
        !body.price ||
        !body.description ||
        !body.summary ||
        !body.tags
    ) {
        CustomResponse.notFound(
            res,
            "Invalid data",
            "Body should contain these fields: {name, price, description, summary, discount: {active, amount, end}}"
        );
        return;
    }

    if (body.summary.length > 200) {
        CustomResponse.bad(
            res,
            "Summary too long",
            "Summary length should be less than or equal to 200"
        );
        return;
    }

    next();
}
