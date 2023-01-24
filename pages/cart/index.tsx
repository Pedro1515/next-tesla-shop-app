import { Typography, Grid } from "@mui/material";
import { ShopLayout } from "@/components/layouts/ShopLayout";
import { CartList, OrderSummaryCard } from "@/components/cart";
import { IProduct } from "@/interfaces";
import { seedData } from "@/database";

interface Props {}

export const CardPage = ({}: Props) => {
    const n = 4;
    return (
        <ShopLayout
            pageTitle={`Carrito - ${n}`}
            pageDescription="Carrito de compras de la tienda"
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
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1" pb={5}>
                        Carrito
                    </Typography>
                </Grid>
                {/* <CartList
                    products={[
                        seedData.products[0] as IProduct,
                        seedData.products[1] as IProduct,
                        seedData.products[0] as IProduct,
                    ]}
                /> */}
                <OrderSummaryCard title="Orden" />
            </Grid>
        </ShopLayout>
    );
};

export default CardPage;
