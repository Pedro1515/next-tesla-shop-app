import { ItemCounter } from "@/components/ui";
import { useCart } from "@/utils/hooks/useCart";
import { Box, Typography, Button } from "@mui/material";
import { ICartProduct } from "../../../interfaces/cart";

export const ItemDetails = (product: ICartProduct) => {
    const { updateProduct, removeProduct } = useCart();
    const priceCalc = product.price * product.quantity;

    const handleCountChange = (count: number) => {
        updateProduct({ ...product, quantity: count });
    };

    return (
        <Box display="flex" flexGrow={1} flexDirection="column" marginLeft={3}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="subtitle1" ml={3}>
                    ${priceCalc}
                </Typography>
            </Box>
            <Typography variant="body2">
                Talla: <strong>{product.size}</strong>
            </Typography>
            <ItemCounter
                initialCount={product.quantity}
                onCountChange={handleCountChange}
            >
                <Button
                    sx={{
                        width: 80,
                    }}
                    color="secondary"
                    onClick={() => removeProduct(product)}
                >
                    Remover
                </Button>
            </ItemCounter>
        </Box>
    );
};
