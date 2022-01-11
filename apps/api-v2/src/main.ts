import * as express from "express";
import * as cors from "cors";
import {config, connectDb} from "./configs";
import * as morgan from "morgan";
import {productsRouter} from "./controllers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", productsRouter);

app.listen(config.PORT, () => {
    if (!config.PROD) {
        console.log(`Server is running on ${config.PORT}`);
    }

    connectDb();
});
