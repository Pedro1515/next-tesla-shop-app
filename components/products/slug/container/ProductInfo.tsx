import { Box, Typography } from "@mui/material";

interface Props {
    description: string;
}

export const ProductInfo = ({ description }: Props) => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" padding={"10px 0"}>
                Descripción
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </Box>
    );
};
