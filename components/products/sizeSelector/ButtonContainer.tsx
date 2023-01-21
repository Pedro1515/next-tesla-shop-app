import { ButtonVariantProps } from "@/interfaces";
import { Button } from "@mui/material";

export const ButtonContainer = ({
    size,
    sizeSelected,
    onSelect,
}: ButtonVariantProps) => (
    <Button
        size="small"
        sx={{
            mr: 1,
            mb: 1,
            backgroundColor:
                sizeSelected === size ? "secondary.light" : "transparent",
            textDecoration: sizeSelected === size ? "underline" : "none",
            ":hover": {
                textDecoration: sizeSelected === size ? "underline" : "none",
            },
        }}
        color="secondary"
        onClick={() => onSelect(size)}
    >
        {size}
    </Button>
);
