import * as mongoose from "mongoose";

const usersSchema = new mongoose.Schema<IUser>(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        profile: {
            name: {
                first: {type: String, required: true},
                last: {type: String, required: true},
            },
            mobile: {type: Number, required: true},
            currency: {type: String, required: true},
            address: {
                country: {type: String, required: true},
                province: {type: String, required: true},
                city: {type: String, required: true},
                zip_code: {type: Number, required: true},
            },
        },
    },
    {
        timestamps: true,
        autoCreate: false,
    }
);

export const usersModel = mongoose.model("users", usersSchema);
