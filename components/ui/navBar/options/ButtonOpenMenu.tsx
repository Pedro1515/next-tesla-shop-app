import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useUi } from "@/hooks/useUi";

export const ButtonOpenMenu = () => {
    const { toggleSideMenu } = useUi();

    return (
        <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            onClick={toggleSideMenu}
        >
            <SearchOutlined />
        </IconButton>
    );
};
