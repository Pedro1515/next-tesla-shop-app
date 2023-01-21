import { Typography } from "@mui/material";

import { ShopLayout } from "components/layouts/ShopLayout";
import { initialData } from "database/products";
import { ProductList } from "components/products/ProductList";
import { IProduct } from "../interfaces/product";

export default function Home() {
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

            <ProductList products={initialData.products as IProduct[]} />
        </ShopLayout>
    );
}
