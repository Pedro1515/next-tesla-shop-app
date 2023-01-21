import NextLink from "next/link";
import Link from "@mui/material/Link";

import { Divider, Box, Typography } from "@mui/material";

export const AddressDetails = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
            >
                <Typography variant="subtitle1">
                    Dirección de entrega
                </Typography>
                <NextLink href="" legacyBehavior passHref>
                    <Link underline="always">Editar</Link>
                </NextLink>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>Nombre</Typography>
                <Typography>John Doe</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>Dirección</Typography>
                <Typography>1234 Main St, New York, NY 10001</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>Correo</Typography>
                <Typography>geio@geioge.ocm</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>Telefono</Typography>
                <Typography>+352 77396352</Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={0.5}
            >
                <Typography>País</Typography>
                <Typography>Chile</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
            >
                <Typography variant="subtitle1">Orden</Typography>
                <NextLink href="" legacyBehavior passHref>
                    <Link underline="always">Editar</Link>
                </NextLink>
            </Box>
        </>
    );
};
