import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

export const ButtonShowInput = ({ onClick }: { onClick: () => void }) => (
    <IconButton
        sx={{ display: { xs: "none", md: "inline-flex" } }}
        onClick={onClick}
    >
        <SearchOutlined />
    </IconButton>
);
