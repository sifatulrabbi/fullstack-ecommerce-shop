import "global";

declare global {
    interface IProduct {
        _id?: string;
        name: string;
        summary: string;
        description: string;
        price: number;
        discount: {
            active: boolean;
            amount: number;
            end: number;
        };
    }

    interface IAddress {
        country: string;
        province: string;
        city: string;
        area: string;
        street: string;
        zip_code: number;
    }

    interface IUser {
        _id?: string;
        username: string;
        password: string;
        profile: {
            name: {
                first: string;
                last: string;
            };
            mobile: number;
            currency: "USD" | "EUR" | "BDT";
            address: IAddress;
        };
    }
}
