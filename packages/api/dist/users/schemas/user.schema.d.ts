/// <reference types="mongoose" />
export declare class User implements IUser {
    email: string;
    password: string;
    name: string;
}
export declare const userSchema: import("mongoose").Schema<import("mongoose").Document<IUser, any, any>, import("mongoose").Model<import("mongoose").Document<IUser, any, any>, any, any, any>, any>;
