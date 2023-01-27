import { GetServerSideProps } from "next";

import { Typography } from "@mui/material";
import { dbProducts, dbProductsByTerm } from "@/database/dbProducts";
import { useProducts } from "@/utils/hooks";
import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";
import { IProduct } from "@/interfaces";

interface Props {
    products: IProduct[];
}

export default function Home({ products }: Props) {
    // const { isError, isLoading, products } = useProducts("/products");

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error...</div>;

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

export const getServerSideProps: GetServerSideProps = async () => {
    const products = await dbProducts();

    return {
        props: {
            products: products || [],
        },
    };
};
