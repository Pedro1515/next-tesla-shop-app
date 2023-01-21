import { IProduct } from "@/interfaces";
import { Box } from "@mui/material";
import { useState } from "react";
import { SizeSelector } from "../sizeSelector/SizeSelector";

export const BoxAddToCart = (product: IProduct) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Box
            color="primary"
            sx={{
                height: 70,
                position: "absolute",
                bottom: 0,
                borderRadius: "0 0 2px 2px",
                backgroundColor: "primary.main",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,.16)",
                width: "100%",
                color: "white",
                display: {
                    xs: "none",
                    md: "flex",
                },
            }}
            fontWeight={600}
            justifyContent="center"
            alignItems="center"
            fontSize={14}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            //TODO: paddingX={2}
        >
            {isHover ? (
                <SizeSelector variant="slim" sizes={product.sizes} />
            ) : (
                "Agregar al carrito +"
            )}
        </Box>
    );
};
