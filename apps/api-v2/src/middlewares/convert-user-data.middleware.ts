import {Request, Response, NextFunction} from "express";
import {CustomResponse} from "../libs";

export function convertUserDataMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const {
        username,
        password,
        confirm_password,
        first_name,
        last_name,
        mobile,
        currency,
        country,
        province,
        city,
        area,
        street,
        zip_code,
    } = req.body;

    if (password) {
        if (password !== confirm_password) {
            CustomResponse.bad(
                res,
                "Invalid Input",
                "Password and Confirm password don't match"
            );
            return;
        }
    }

    const data = {
        username: undefined,
        password: undefined,
        profile: {
            name: {first: undefined, last: undefined},
            mobile: undefined,
            currency: undefined,
            address: {
                country: undefined,
                province: undefined,
                city: undefined,
                area: undefined,
                street: undefined,
                zip_code: undefined,
            },
        },
    };

    if (username) {
        data.username = username;
    }

    if (password) {
        data.password = password;
    }

    if (first_name) {
        data.profile.name.first = first_name;
    }

    if (last_name) {
        data.profile.name.last = last_name;
    }

    if (mobile) {
        data.profile.mobile = mobile;
    }

    if (currency) {
        data.profile.currency = currency;
    }

    if (country) {
        data.profile.address.country = country;
    }

    if (province) {
        data.profile.address.province = province;
    }

    if (city) {
        data.profile.address.city = city;
    }

    if (area) {
        data.profile.address.area = area;
    }

    if (street) {
        data.profile.address.street = street;
    }

    if (zip_code) {
        data.profile.address.zip_code = zip_code;
    }

    req.body = data;
    next();
}
