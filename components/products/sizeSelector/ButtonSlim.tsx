import { ButtonVariantProps } from "@/interfaces";
import { Typography } from "@mui/material";

export const ButtonSlim = ({
    size,
    sizeSelected,
    onSelect,
}: ButtonVariantProps) => (
    <button
        style={{
            border: "none",
            padding: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
        }}
        onClick={() => onSelect(size)}
    >
        <Typography
            sx={{
                textDecoration: sizeSelected === size ? "underline" : "none",
                ":hover": {
                    textDecoration: "underline",
                },
                padding: "8px 12px",
            }}
            component="span"
            fontWeight={600}
            color="#fff"
            fontSize={12}
        >
            {size}
        </Typography>
    </button>
);
