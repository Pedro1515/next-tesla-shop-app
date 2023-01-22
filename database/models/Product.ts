import { IProduct } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IProductModel extends IProduct {}

const ProductSchema = new Schema({
    description: { type: String, required: true },
    images: { type: [String], required: true },
    inStock: { type: Number, required: true },
    price: { type: Number, required: true },
    sizes: { type: [String], required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: [String], required: true },
    title: { type: String, required: true },
});

const ProductModel: Model<IProductModel> =
    mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
