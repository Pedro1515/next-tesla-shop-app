import { Typography, Grid } from "@mui/material";
import { ShopLayout } from "@/components/layouts/ShopLayout";
import { CartList, OrderSummaryCard } from "@/components/cart";
import { useCart } from "@/utils/hooks/useCart";
import { EmptyLayout } from "@/components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";

export const CardPage = () => {
    const { cart, isLoading } = useCart();

    if (cart.length === 0 && !isLoading) {
        return (
            <EmptyLayout
                pageTitle="Carrito vacío"
                pageDescription="No hay artículos en el carito de compras"
                BigIcon={<RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />}
                message="Su carrito esta vacío"
            />
        );
    }

    return (
        <ShopLayout
            pageTitle={`Carrito${
                isLoading ? "" : " - " + cart.length + " artículos"
            }`}
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
                {!isLoading && (
                    <>
                        <Grid item xs={12}>
                            <Typography variant="h1" component="h1" pb={5}>
                                Carrito
                            </Typography>
                        </Grid>
                        <CartList />
                        <OrderSummaryCard title="Orden" />
                    </>
                )}
            </Grid>
        </ShopLayout>
    );
};

export default CardPage;
