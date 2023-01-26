import { ButtonVariantProps } from "@/interfaces";
import { Button, Typography } from "@mui/material";

export const ButtonContainer = ({
    label,
    active,
    onClick,
}: ButtonVariantProps) => (
    <Button
        size="small"
        sx={{
            mr: 1,
            mb: 1,
            backgroundColor: active ? "secondary.light" : "transparent",
        }}
        color="secondary"
        onClick={onClick}
    >
        <Typography
            sx={{
                borderBottom: active
                    ? "1px solid black"
                    : "1px solid transparent",
            }}
        >
            {label}
        </Typography>
    </Button>
);
