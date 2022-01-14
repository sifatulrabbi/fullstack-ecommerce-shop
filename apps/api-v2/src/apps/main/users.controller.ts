import {Router, Request, Response} from "express";
import {CustomResponse} from "../../libs";
import {convertUserDataMiddleware} from "../../middlewares";
import {createUser, getUser, updateUser} from "../../services/users.service";

const usersRouter = Router();

usersRouter.get("/:id", async (req: Request, res: Response) => {
    const user = await getUser(req.params.id);

    if (!user) {
        CustomResponse.notFound(res, "Not Found", "No user found with the id");
    }

    CustomResponse.ok(res, "User found", [user]);
});

usersRouter.post(
    "/",
    convertUserDataMiddleware,
    async (req: Request, res: Response) => {
        const user = await createUser(req.body);

        if (!user) {
            CustomResponse.bad(
                res,
                "Bad request",
                "Unable to create user please try again"
            );
        }

        CustomResponse.ok(res, "Hello from user creation route", [user]);
    }
);

usersRouter.put("/:id");

usersRouter.delete("/:id");

export {usersRouter};
