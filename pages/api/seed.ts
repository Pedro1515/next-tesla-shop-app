import { db, seedData } from "@/database";
import ProductModel from "@/database/models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

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

    await ProductModel.deleteMany();
    await ProductModel.insertMany(seedData.products);

    await db.disconnect();

    res.status(200).json({ name: "successful!" });
}
