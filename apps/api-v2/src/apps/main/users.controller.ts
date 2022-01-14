import {Router, Request, Response} from "express";
import {CustomResponse} from "../../libs";
import {
    createUser,
    getUser,
    removeUser,
    updateUser,
} from "../../services/users.service";
import {createUserValidator} from "../../validators";

const usersController = Router();

usersController.get("/:id", async (req: Request, res: Response) => {
    const user = await getUser(req.params.id);

    if (!user) {
        CustomResponse.notFound(res, "Not Found", "No user found with the id");
        return;
    }

    CustomResponse.ok(res, "User found", [user]);
});

usersController.post(
    "/",
    createUserValidator,
    async (req: Request, res: Response) => {
        const user = await createUser(req.body);

        if (!user) {
            CustomResponse.bad(
                res,
                "Bad request",
                "Unable to create user please try again"
            );
            return;
        }

        CustomResponse.ok(res, "User created", [user]);
    }
);

usersController.put("/:id", async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body);

    if (!user) {
        CustomResponse.notFound(
            res,
            "Not Found",
            "No user found with the user id"
        );
        return;
    }

    CustomResponse.ok(res, "User updated", [user]);
});

usersController.delete("/:id", async (req: Request, res: Response) => {
    const remove = await removeUser(req.params.id);

    if (!remove) {
        CustomResponse.notFound(res, "Not Found", "No user found with the id");
    }

    CustomResponse.ok(res, "User removed");
});

export {usersController};
