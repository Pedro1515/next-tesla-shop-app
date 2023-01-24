import { Typography, Grid } from "@mui/material";

import { ShopLayout } from "@/components/layouts/ShopLayout";
import { CartList } from "@/components/cart";
import { OrderSummaryCard } from "@/components/cart/orderSummaryCard/OrderSummaryCard";
import { IProduct } from "@/interfaces";
import { seedData } from "@/database";

interface Props {}

export const SummaryPage = ({}: Props) => {
    const n = 4;
    return (
        <ShopLayout
            pageTitle={`Resumen de orden - ${n}`}
            pageDescription="Resumen de orden de la tienda"
            maxWidth={{
                sm: 550,
                md: 1080,
            }}
        >
            <Grid
                container
                sx={{
                    margin: { sm: "auto", md: "auto", lg: "none" },
                }}
            >
                {/* heading */}
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1" pb={5}>
                        Resumen de la orden
                    </Typography>
                </Grid>

                {/* <CartList
                    products={[
                        seedData.products[0] as IProduct,
                        seedData.products[1] as IProduct,
                        seedData.products[0] as IProduct,
                    ]}
                /> */}
                <OrderSummaryCard title="Resumen (3 productos)" address />
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
