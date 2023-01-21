import { ItemCounter } from "@/components/ui";
import { IProduct } from "@/interfaces";
import { Box, Typography, Button } from "@mui/material";

export const ItemBody = (product: IProduct) => {
    return (
        <Box display="flex" flexGrow={1} flexDirection="column" marginLeft={3}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="subtitle1" ml={3}>
                    ${product.price}
                </Typography>
            </Box>
            <Typography variant="body2">
                Talla: <strong>M</strong>
            </Typography>
            <ItemCounter>
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
