import NextLink from "next/link";
import Link from "@mui/material/Link";

import { Divider, Box, Typography } from "@mui/material";

export const OrderDetails = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>N. De Productos</Typography>
                <Typography>3 Productos</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>SubTotal</Typography>
                <Typography>$327.48</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>Impuestos (15%)</Typography>
                <Typography>$48.00</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
            >
                <Typography variant="subtitle1">Total</Typography>
                <Typography variant="subtitle1">$427.00</Typography>
            </Box>
        </>
    );
};
