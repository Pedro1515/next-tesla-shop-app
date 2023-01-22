import { IProduct } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IProductModel extends IProduct {}

const ProductSchema = new Schema(
    {
        description: { type: String, required: true },
        images: [{ type: String }],
        inStock: { type: Number, required: true },
        price: { type: Number, required: true },
        slug: { type: String, required: true, unique: true },
        tags: [{ type: String }],
        title: { type: String, required: true },
        gender: {
            type: String,
            required: true,
            enum: {
                values: ["men", "women", "kid", "unisex"],
                message: "{VALUE} must be men, women, kid, unisex",
            },
        },
        sizes: [
            {
                type: String,
                required: true,
                enum: {
                    values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
                    message: "{VALUE} must be XS, S, M, L, XL, XXL or XXXL",
                },
            },
        ],
        type: {
            type: String,
            required: true,
            enum: {
                values: ["shirts", "pants", "hoodies", "hats"],
                message: "{VALUE} must be shirts, pants, hoodies, hats",
            },
        },
    },
    { timestamps: true }
);

const ProductModel: Model<IProductModel> =
    mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
