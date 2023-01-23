import { db } from "@/database";
import { SHOP_CONSTANTS } from "@/database/constants";
import { IProductModel } from "@/database/models";
import ProductModel from "@/database/models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IProductModel[] | IProductModel;

export default function handle(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "GET":
            return getProducts(req, res);

        case "POST":
            return postProduct(req, res);

        default:
            return res
                .status(400)
                .json({ message: "Endpoint not implemented" });
    }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { gender = "" } = req.query;

    let condition = {};

    if (gender && !SHOP_CONSTANTS.validGender.includes(gender as string)) {
        res.status(400).json({
            message: `gender no found, It must be ${SHOP_CONSTANTS.validGender}`,
        });
    }

    if (gender) condition = { gender };

    await db.connect();
    const Products = await ProductModel.find(condition)
        .select("title price sizes images inStock slug -_id ")
        .lean();
    await db.disconnect();

    res.status(200).json(Products);
};

const postProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ message: "Description is required" });
    }

    const newProduct = new ProductModel({
        description,
        createdAt: Date.now(),
    });

    try {
        await db.connect();
        await newProduct.save();
        await db.disconnect();

        return res.status(201).json(newProduct);
    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(500).json({ message: "Internal server error" });
    }

    // res.status(201).json(Product)
};
