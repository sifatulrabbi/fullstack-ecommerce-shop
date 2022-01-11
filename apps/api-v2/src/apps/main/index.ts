import * as express from "express";
import {productsRouter} from "./products.controller";

const mainApp = express();

mainApp.use("/products", productsRouter);

mainApp.get("/", (req, res) => {
    res.status(200).json({message: "Hello from main"});
});

export {mainApp};
