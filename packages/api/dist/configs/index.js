"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
const validation_config_1 = require("./validation.config");
dotenv.config();
const PORT = parseInt(process.env.PORT || "5000", 10);
let MONGO_URI;
if (process.env.NODE_ENV === "development") {
    MONGO_URI = "mongodb://127.0.0.1:27017/fullstack-shop";
}
else {
    MONGO_URI = process.env.MONGO_URI || "none";
}
exports.config = { PORT, MONGO_URI, validationOptions: validation_config_1.validationOptions };
//# sourceMappingURL=index.js.map