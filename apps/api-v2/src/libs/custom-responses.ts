import {Response} from "express";

export class CustomResponse {
    constructor(
        private res: Response,
        private statusCode: number,
        private message: string,
        private data: any[] | null,
        private error: string | null
    ) {
        this.res.status(this.statusCode).json({
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
            error: this.error,
        });
    }

    static ok(
        res: Response,
        message: string = "Ok",
        data: any[] | null = null
    ) {
        new CustomResponse(res, 200, message, data, null);
    }

    static created(
        res: Response,
        message: string = "Created",
        data: any[] | null = null
    ) {
        new CustomResponse(res, 201, message, data, null);
    }

    static bad(
        res: Response,
        message: string = "Bad Request",
        error: any | null
    ) {
        new CustomResponse(res, 400, message, null, error);
    }

    static unauthorized(
        res: Response,
        message: string = "Request Forbidden",
        error: any | null
    ) {
        new CustomResponse(res, 401, message, null, error);
    }

    static forbidden(
        res: Response,
        message: string = "Request Forbidden",
        error: any | null
    ) {
        new CustomResponse(res, 403, message, null, error);
    }

    static notFound(
        res: Response,
        message: string = "Not Found",
        error: any | null
    ) {
        new CustomResponse(res, 404, message, null, error);
    }

    static notAcceptable(
        res: Response,
        message: string = "Not acceptable",
        error: any | null
    ) {
        new CustomResponse(res, 406, message, null, error);
    }
}
