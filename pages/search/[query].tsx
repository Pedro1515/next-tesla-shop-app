import { GetServerSideProps } from "next";

import { Typography } from "@mui/material";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";
import { dbProductsByTerm } from "@/database/dbProducts";
import { IProduct } from "@/interfaces";

interface Props {
    products: IProduct[];
    productsNoFound: boolean;
    query: string;
}

export default function Home({ products, productsNoFound, query }: Props) {
    return (
        <ShopLayout
            pageTitle="Tesla | Shop - Home"
            pageDescription="Encuentra los mejores productos de Tesla para mujeres adultas."
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            {productsNoFound ? (
                <Typography variant="h2" component="h2">
                    No encontramos resultados para esta búsqueda:{" "}
                    <strong>{query}</strong>. Te mostramos los productos mas
                    relevantes en Tesla Shop.
                </Typography>
            ) : (
                <Typography variant="h2" component="h2">
                    Resultados de la búsqueda: {query}
                </Typography>
            )}

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
    const productsNoFound = products.length === 0;

    if (productsNoFound) {
        products = await dbProductsByTerm("Cybertruck");
    }

    return {
        props: {
            products,
            productsNoFound,
            query,
        },
    };
};
