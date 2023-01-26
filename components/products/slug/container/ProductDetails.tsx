import { ItemCounter } from "@/components/ui";
import { ISize } from "@/interfaces";
import { Box, Typography, Chip, Button } from "@mui/material";
import { SizeSelector } from "../../sizeSelector/SizeSelector";

interface props {
    outOfStock: boolean;
    sizes: ISize[];
    sizeEmpty: boolean;
    limitCount?: number;
    handleSelectSize: (size: ISize) => void;
    handleCount: (count: number) => void;
    handleAddToCart: () => void;
}

export const ProductDetails = ({
    outOfStock,
    sizes,
    sizeEmpty,
    handleSelectSize,
    handleCount,
    handleAddToCart,
    limitCount,
}: props) => {
    return (
        <Box width={350} display="flex" flexDirection="column" gap={1}>
            {/* Quantity */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2">Cantidad</Typography>
                <ItemCounter limit={limitCount} onCountChange={handleCount} />
            </Box>

            <SizeSelector sizes={sizes} onSelectSize={handleSelectSize} />

            {/* Add to cart */}
            {outOfStock ? (
                <Chip sx={{ height: 40 }} label="Este producto está agotado" />
            ) : (
                <Button
                    onClick={handleAddToCart}
                    disabled={sizeEmpty}
                    sx={{ height: 40, mt: 2 }}
                >
                    {sizeEmpty ? "Selecciona una talla" : "Agregar al carrito"}
                </Button>
            )}
        </Box>
    );
};
