import { useState } from "react";
import Link from "next/link";

import {
    Grid,
    CardActionArea,
    CardMedia,
    Box,
    Typography,
    Chip,
} from "@mui/material";

import { IProduct } from "@/interfaces";
import { BoxAddToCart } from "./BoxAddToCart";

interface Props {
    product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
    const [isHover, setIsHover] = useState(false);

    const productImage = isHover
        ? "/products/" + product.images[1]
        : "/products/" + product.images[0];

    const radius = "3px";
    const outOfStock = !product.inStock;

    return (
        <Grid item xs={12} sm={6} md={4} key={product.slug}>
            <Box
                position="relative"
                borderRadius={radius}
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
                            zIndex: 1,
                        }}
                    />
                )}

                <Link
                    href={`/product/${product.slug}`}
                    prefetch={false}
                    legacyBehavior
                >
                    <CardActionArea sx={{ borderRadius: radius }}>
                        <CardMedia
                            component="img"
                            image={productImage}
                            alt={product.title}
                            sx={{
                                borderRadius: radius,
                            }}
                        />
                    </CardActionArea>
                </Link>
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
