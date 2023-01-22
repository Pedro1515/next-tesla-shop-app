import { GetStaticProps } from "next";

import { productsApi } from "@/api";
import { IProduct } from "@/interfaces";
import { Typography } from "@mui/material";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";

interface Props {
    products: IProduct[];
}

export default function Home({ products }: Props) {
    console.log(products);

    return (
        <ShopLayout
            pageTitle="Tesla | Shop - Home"
            pageDescription="Encuentra los mejores productos de Tesla en un solo lugar."
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2">
                Todos los productos
            </Typography>

            <ProductList products={products} />
        </ShopLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await productsApi.get<IProduct[]>("/");
    return {
        props: {
            products: data,
        },
    };
};
