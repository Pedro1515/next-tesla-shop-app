import { Typography } from "@mui/material";
import { useProducts } from "@/utils/hooks";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";

export default function Home() {
    const { isError, isLoading, products } = useProducts(
        "/products?gender=women"
    );

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;

    return (
        <ShopLayout
            pageTitle="Tesla | Shop - Home"
            pageDescription="Encuentra los mejores productos de Tesla para mujeres adultas."
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2">
                Productos para mujeres
            </Typography>

            <ProductList products={products} />
        </ShopLayout>
    );
}
