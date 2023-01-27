import type { NextApiRequest, NextApiResponse } from "next";

import { db, seedData } from "@/database";
import ProductModel from "@/database/models/Product";
import UserModel from "@/database/models/User";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "Not allowed" } as any);
    }

    await db.connect();

    await UserModel.deleteMany();
    await UserModel.insertMany(seedData.users);

    await ProductModel.deleteMany();
    await ProductModel.insertMany(seedData.products);

    await db.disconnect();

    res.status(200).json({ name: "successful!" });
}
