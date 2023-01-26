import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { ItemImage } from "./ItemImage";
import { ItemDetails } from "./ItemDetails";
import { useCart } from "@/utils/hooks/useCart";

export const CartList = () => {
    const { cart } = useCart();

    return (
        <Grid item xs={12} sm={12} md={7}>
            {cart.map((product) => (
                <Box
                    display="flex"
                    key={product.slug}
                    sx={{ mb: 1, paddingRight: { md: 10 } }}
                >
                    <ItemImage img={product.image} slug={product.slug} />
                    <ItemDetails {...product} />
                </Box>
            ))}
        </Grid>
    );
};
