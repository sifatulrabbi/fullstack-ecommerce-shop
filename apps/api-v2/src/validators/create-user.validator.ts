import {Request, Response, NextFunction} from "express";
import {CustomResponse} from "../libs";

export async function createUserValidator(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const body = req.body;

    if (
        !body.username ||
        !body.password ||
        !body.confirm_password ||
        !body.name ||
        !body.address ||
        !body.currency ||
        !body.mobile
    ) {
        CustomResponse.notFound(
            res,
            "Incorrect data",
            "Body should contain these fields: {username, password, confirm_password, name: {first, last}, address: {country ,province ,city ,area ,street ,zip_code }, currency, mobile}"
        );
        return;
    }

    if (!body.name.first || !body.name.last) {
        CustomResponse.notFound(
            res,
            "Incorrect name fields",
            "name: {first, last}"
        );
        return;
    }

    if (
        !body.address.country ||
        !body.address.province ||
        !body.address.city ||
        !body.address.area ||
        !body.address.street ||
        !body.address.zip_code
    ) {
        CustomResponse.notFound(
            res,
            "Invalid address fields",
            "address: {country, province, city, area, street, zip_code}"
        );
        return;
    }

    next();
}
