import { db } from ".";
import ProductModel from "./models/Product";
import { IProduct } from "../interfaces/product";

export const dbProductBySlug = async (slug: string) => {
    await db.connect();
    const product = await ProductModel.findOne({ slug }).lean();
    await db.disconnect();

    //* product id is parsed to avoid the getServerSideProps serialization error because of the mongoID object
    const propertiesToString = JSON.stringify({
        _id: product?._id,
        createdAt: product?.createdAt,
        updatedAt: product?.updatedAt,
    });

    const propertiesParsed = JSON.parse(propertiesToString);

    return product ? { ...product, ...propertiesParsed } : null;
};

export const dbProductSlugs = async (): Promise<{ slug: string }[]> => {
    await db.connect();
    const slugs = await ProductModel.find().select("slug -_id").lean();
    await db.disconnect();

    return slugs || [];
};

export const dbProductsByTerm = async (q: string): Promise<IProduct[]> => {
    q = q.toString().toLowerCase();

    await db.connect();
    const products = await ProductModel.find({
        $text: { $search: q },
    })
        .select("title price sizes images inStock slug -_id ")
        .lean();

    await db.disconnect();

    return products || [];
};

export const dbProducts = async (): Promise<IProduct[]> => {

    await db.connect();
    const products = await ProductModel.find()
        .select("title price sizes images inStock slug -_id ")
        .lean();

    await db.disconnect();

    return products || [];
};
