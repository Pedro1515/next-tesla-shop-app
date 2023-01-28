import { IProduct } from "@/interfaces";
import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import { SizeSelector } from "../sizeSelector/SizeSelector";

import NextLink from "next/link";
import Link from "@mui/material/Link";

interface Props {
    product: IProduct;
    outOfStock: boolean;
    radius: number;
}

export const BoxAddToCart = ({ product, outOfStock, radius }: Props) => {
    const [isHover, setIsHover] = useState(false);

    const boxStyles = {
        height: { md: "28%", lg: "25%", xl: "20%" },
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        borderRadius: 0,
        backgroundColor: "secondary.main",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,.16)",
        width: "100%",
        display: {
            xs: "none",
            md: "flex",
        },
        justifyContent: "center",
        alignItems: "center",
    };

    if (outOfStock) {
        return (
            <NextLink href={`/product/${product.slug}`} legacyBehavior passHref>
                <Link
                    underline="none"
                    sx={boxStyles}
                    variant="h6"
                    fontWeight={600}
                >
                    Ver Detalles
                </Link>
            </NextLink>
        );
    }
    return (
        <Card
            sx={{
                ...boxStyles,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? (
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        component="p"
                        textAlign="center"
                        mb={1}
                    >
                        Selecciona Tu Talla
                    </Typography>
                    <SizeSelector variant="slim" sizes={product.sizes} />
                </Box>
            ) : (
                <Typography
                    variant="h6"
                    fontWeight={600}
                    component="p"
                    textAlign="center"
                >
                    Agregar Directamente +
                </Typography>
            )}
        </Card>
    );
};
