import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import {config, connectDb} from "./configs";
import {adminApp, mainApp} from "./apps";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", mainApp);
app.use("/api/v1/admin", adminApp);

app.listen(config.PORT, () => {
    if (!config.PROD) {
        console.log(`Server is running on ${config.PORT}`);
    }

    connectDb();
});
