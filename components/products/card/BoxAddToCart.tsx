import { IProduct } from "@/interfaces";
import { Box } from "@mui/material";
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
        height: 70,
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        borderRadius: `0 0 ${radius}px ${radius}px`,
        backgroundColor: "primary.main",
        ":hover": {
            backgroundColor: outOfStock ? "primary.dark" : "primary.main",
        },
        boxShadow: "0 8px 16px 0 rgba(0,0,0,.16)",
        width: "100%",
        color: "white",
        display: {
            xs: "none",
            md: "flex",
        },
        fontweight: 600,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
    };

    if (outOfStock) {
        return (
            <NextLink href={`/product/${product.slug}`} legacyBehavior passHref>
                <Link underline="none" sx={boxStyles}>
                    Ver Detalles
                </Link>
            </NextLink>
        );
    }

    return (
        <Box
            color="primary"
            sx={boxStyles}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? (
                <SizeSelector variant="slim" sizes={product.sizes} />
            ) : (
                "Agregar al carrito +"
            )}
        </Box>
    );
};
