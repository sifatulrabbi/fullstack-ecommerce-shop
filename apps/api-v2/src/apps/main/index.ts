import * as express from "express";
import {productsRouter} from "./products.controller";
import {usersRouter} from "./users.controller";
import {mongoIdValidator} from "../../validators";

const mainApp = express();

mainApp.use("/products/:id", mongoIdValidator);
mainApp.use("/users/:id", mongoIdValidator);

mainApp.use("/products", productsRouter);
mainApp.use("/users", usersRouter);

mainApp.get("/", (req, res) => {
    res.status(200).json({message: "Hello from main"});
});

export {mainApp};
