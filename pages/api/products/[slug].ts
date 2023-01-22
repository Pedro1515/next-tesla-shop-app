import { db } from "@/database";
import { IProductModel } from "@/database/models";
import ProductModel from "@/database/models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IProductModel;

export default function handle(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query;

    switch (req.method) {
        case "GET":
            return getProductBySlug(slug as string, res);

        case "PATCH":
            return pacthProduct(req, res);

        case "DELETE":
            return deleteProduct(slug as string, res);

        default:
            return res
                .status(400)
                .json({ message: "Endpoint not implemented" });
    }
}

const getProductBySlug = async (slug: string, res: NextApiResponse<Data>) => {
    try {
        await db.connect();
        const Product = await ProductModel.findOne({ slug });

        if (!Product)
            return res.status(404).json({ message: "Product not found" });
        await db.disconnect();

        return res.status(200).json(Product);
    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(500).json({ message: "Internal server error" });
    }
};

const pacthProduct = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    try {
        await db.connect();
        const ProductUpdated = await ProductModel.findOneAndUpdate(
            { _id: req.query.id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!ProductUpdated)
            return res.status(404).json({ message: "Product not found" });
        await db.disconnect();

        return res.status(200).json(ProductUpdated);
    } catch (error: any) {
        await db.disconnect();
        return res.status(500).json({ message: error.errors.status.message });
    }
};

const deleteProduct = async (id: string, res: NextApiResponse<Data>) => {
    try {
        await db.connect();
        const Product = await ProductModel.deleteOne({ _id: id });
        if (!Product)
            return res.status(404).json({ message: "Product not found" });
        await db.disconnect();

        return res.status(200).json(Product as any);
    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(500).json({ message: "Internal server error" });
    }
};
