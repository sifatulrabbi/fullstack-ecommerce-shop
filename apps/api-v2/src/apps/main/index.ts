import * as express from "express";
import {productsController} from "./products.controller";
import {usersController} from "./users.controller";
import {mongoIdValidator} from "../../validators";

const mainApp = express();

mainApp.use("/products/:id", mongoIdValidator);
mainApp.use("/users/:id", mongoIdValidator);

mainApp.use("/products", productsController);
mainApp.use("/users", usersController);

mainApp.get("/", (req, res) => {
    res.status(200).json({message: "Hello from main"});
});

export {mainApp};
