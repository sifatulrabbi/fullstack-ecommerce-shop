import {IUser} from "../interfaces";
import {usersModel} from "../models";

export async function getUsers() {
    try {
        const users = await usersModel.find({});
        return users;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getUser(id: string) {
    try {
        const user = await usersModel.findById(id);
        return user;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function createUser(userDto: Omit<IUser, "_id">) {
    try {
        const userDoc = new usersModel(userDto);
        const user = await userDoc.save();
        return user;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function updateUser(id: string, userDto: Omit<IUser, "_id">) {
    try {
        const user = await getUser(id);

        if (!user) {
            return null;
        }

        const updatedUser = await usersModel.findByIdAndUpdate(id, userDto);
        return updatedUser;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function removeUser(id: string) {
    try {
        const status = await usersModel.findByIdAndRemove(id);

        if (!status) {
            return null;
        } else {
            return "User Removed";
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}
