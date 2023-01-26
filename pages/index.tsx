import { Typography } from "@mui/material";
import { useProducts } from "@/utils/hooks";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductList } from "components/products/ProductList";

// interface Props {
//     products?: IProduct[];
// }

export default function Home() {
    const { isError, isLoading, products } = useProducts("/products");

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;

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
