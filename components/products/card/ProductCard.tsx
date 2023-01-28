import { useState } from "react";

import { Grid, Box, Typography, Chip } from "@mui/material";

import { IProduct } from "@/interfaces";
import { BoxAddToCart } from "./BoxAddToCart";
import { CardImage } from "./CardImage";

interface Props {
    product: IProduct;
    index: number;
}

export const ProductCard = ({ product, index }: Props) => {
    const [isHover, setIsHover] = useState(false);

    const outOfStock = !product.inStock;

    return (
        <Grid item xs={12} sm={6} md={4} marginTop={5}>
            <Box
                position="relative"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {outOfStock && (
                    <Chip
                        color="primary"
                        variant="filled"
                        label="Agotado"
                        sx={{
                            position: "absolute",
                            opacity: 0.8,
                            top: 0,
                            left: 0,
                            zIndex: 2,
                        }}
                    />
                )}
                <CardImage
                    images={product.images}
                    title={product.title}
                    isHover={isHover}
                    index={index}
                    slug={product.slug}
                />
                {isHover && (
                    <BoxAddToCart product={product} outOfStock={outOfStock} />
                )}
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Typography fontWeight={600}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    );
};
