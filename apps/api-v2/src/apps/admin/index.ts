import * as express from "express";
import {productsRouter} from "./products.controller";
import {ordersController} from "./orders.controller";

const adminApp = express();

adminApp.use("/manage/products", productsRouter);
adminApp.use("/manage/orders", ordersController);

adminApp.get("/admin", (req, res) => {
    res.status(200).json({message: "Hello from admin"});
});

export {adminApp};
