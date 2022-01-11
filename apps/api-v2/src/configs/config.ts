import * as dotenv from "dotenv";
import * as fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({path: ".env"});
} else if (fs.existsSync(".env.example")) {
    dotenv.config({path: ".env.example"});
} else {
    console.error("Error: No ENV file found");
    process.exit(1);
}

if (!process.env.PORT && !process.env.MONGODB_URI) {
    console.error("Error: Invalid format in ENV file");
    process.exit(1);
}

const PROD = process.env.NODE_ENV === "production";
const PORT = parseInt(process.env.PORT || "5000", 10);
const MONGODB_URI = process.env.MONGODB_URI || "no uri";

export const config = {
    PROD,
    PORT,
    MONGODB_URI,
};
