import {Request, Response, NextFunction} from "express";
import {CustomResponse} from "../libs";

export function mongoIdValidator(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.params.id.length === 12 || req.params.id.length === 24) {
        next();
    } else {
        CustomResponse.notAcceptable(
            res,
            "Invalid id",
            "Id has to be 12 or 24 characters long"
        );
    }
}
