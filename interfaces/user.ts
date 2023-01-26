export interface IUser {
    _id: string;
    name: string;
    email: string;
    password?: string;
    role: IUserRole;
    createdAt?: Date;
    updatedAt?: Date;
}

export type IUserRole = "admin" | "client";
