import {Request, Response, Router} from "express";
import {CustomResponse} from "../../libs";
import {getUser, getUsers} from "../../services/users.service";
import {mongoIdValidator} from "../../validators";

const usersController = Router();

usersController.get("/", async (req: Request, res: Response) => {
    const users = await getUsers();
    CustomResponse.ok(res, "Users found", users);
});

usersController.get(
    "/:id",
    mongoIdValidator,
    async (req: Request, res: Response) => {
        const user = await getUser(req.params.id);

        if (!user) {
            CustomResponse.notFound(
                res,
                "User not found",
                "User id does not exists"
            );
        }

        CustomResponse.ok(res, "User found", [user]);
    }
);

export {usersController};
