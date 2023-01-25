import { GetServerSideProps } from "next";

import { Typography } from "@mui/material";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";
import { dbProductsByTerm } from "@/database/dbProducts";
import { IProduct } from "@/interfaces";
import { useRouter } from "next/router";

interface Props {
    products: IProduct[];
}

export default function Home({ products }: Props) {
    const {
        query: { query = "" },
    } = useRouter();
    return (
        <ShopLayout
            pageTitle="Tesla | Shop - Home"
            pageDescription="Encuentra los mejores productos de Tesla para mujeres adultas."
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2">
                {products.length > 0
                    ? `Resultados de la búsqueda: ${query}`
                    : "No encontramos resultados para esta búsqueda"}
            </Typography>

            <ProductList products={products} />
        </ShopLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = "" } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    }

    let products = await dbProductsByTerm(query);

    if (products.length === 0) {
        products = [];
    }

    return {
        props: {
            products,
        },
    };
};
