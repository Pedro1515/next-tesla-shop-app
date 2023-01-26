import { ItemCounter } from "@/components/ui";
import { Box, Typography, Button } from "@mui/material";
import { ICartProduct } from "../../../interfaces/cart";

export const ItemDetails = (product: ICartProduct) => {
    const priceCalc = product.price * product.quantity;

    return (
        <Box display="flex" flexGrow={1} flexDirection="column" marginLeft={3}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="subtitle1" ml={3}>
                    ${priceCalc}
                </Typography>
            </Box>
            <Typography variant="body2">
                Talla: <strong>M</strong>
            </Typography>
            <ItemCounter
                initialCount={product.quantity}
                onCountChange={() => {}}
            >
                <Button
                    sx={{
                        width: 80,
                    }}
                    color="secondary"
                >
                    Remover
                </Button>
            </ItemCounter>
        </Box>
    );
};
