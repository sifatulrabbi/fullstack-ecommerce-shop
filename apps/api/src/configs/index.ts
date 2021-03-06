import * as dotenv from "dotenv";
import { validationOptions } from "./validation.config";

dotenv.config();

const PORT: number = parseInt(process.env.PORT || "5000", 10);

let MONGO_URI: string;
let JWT_SECRET: string;

if (process.env.NODE_ENV === "development") {
  MONGO_URI = "mongodb://127.0.0.1:27017/fullstack-shop";
  JWT_SECRET = "JWT SECRET";
} else {
  MONGO_URI = process.env.MONGO_URI || "none";
  JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";
}

export const config = { PORT, MONGO_URI, validationOptions, JWT_SECRET };
