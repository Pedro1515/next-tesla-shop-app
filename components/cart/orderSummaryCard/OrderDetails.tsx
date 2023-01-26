import { useCart } from "@/hooks/useCart";
import { Box, Typography } from "@mui/material";

export const OrderDetails = () => {
    const { cartTotal } = useCart();

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>N. De Productos</Typography>
                <Typography>{cartTotal.quantity} Productos</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>SubTotal</Typography>
                <Typography>${cartTotal.price}</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>
                    Impuestos ({cartTotal.taxesPercentage}%)
                </Typography>
                <Typography>${cartTotal.taxes}</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
            >
                <Typography variant="subtitle1">Total</Typography>
                <Typography variant="subtitle1">
                    ${cartTotal.priceWithTaxes}
                </Typography>
            </Box>
        </>
    );
};
