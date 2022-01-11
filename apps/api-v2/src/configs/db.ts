import * as mongoose from "mongoose";
import {config} from "./config";

export async function connectDb(): Promise<void> {
    try {
        const conn = await mongoose.connect(config.MONGODB_URI);
        console.log(
            "Connected to MongoDb\nDatabase host:",
            conn.connection.host
        );
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
