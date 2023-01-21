import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { IProduct } from "@/interfaces";
import { ItemImage } from "./ItemImage";
import { ItemBody } from "./ItemBody";

interface Props {
    products: IProduct[];
}

export const CartList = ({ products }: Props) => {
    return (
        <Grid item xs={12} sm={12} md={7}>
            {products.map((product) => (
                <Box
                    display="flex"
                    key={product.slug}
                    sx={{ mb: 1, paddingRight: { md: 10 } }}
                >
                    <ItemImage img={product.images[0]} />
                    <ItemBody {...product} />
                </Box>
            ))}
        </Grid>
    );
};
