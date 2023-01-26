import { ButtonVariantProps } from "@/interfaces";
import { Typography } from "@mui/material";

export const ButtonSlim = ({ label, active, onClick }: ButtonVariantProps) => (
    <button
        style={{
            border: "none",
            padding: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
            flexGrow: 1,
            display: "flex",
            maxWidth: "30px",
        }}
        onClick={onClick}
    >
        <Typography
            sx={{
                flexGrow: 1,
                // ":hover": {
                //     backgroundColor: "primary.light",
                // },
                borderBottom: active
                    ? "1px solid #fff"
                    : "1px solid transparent",
            }}
            padding="2px 0"
            component="span"
            color="#fff"
            fontWeight={600}
            fontSize={12}
        >
            {label}
        </Typography>
    </button>
);
