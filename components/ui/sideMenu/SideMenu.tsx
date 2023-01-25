import { Box, Divider, Drawer, List } from "@mui/material";
import { useUi } from "@/hooks/useUi";
import { MenuCategories } from "./MenuCategories";
import { MenuAdminPanel } from "./MenuAdminPanel";
import { MenuGeneralOptions } from "./MenuGeneralOptions";
import { MenuSearchBox } from "./MenuSearchBox";

export const SideMenu = () => {
    const { toggleSideMenu, state } = useUi();

    return (
        <Drawer
            open={state.isSideMenuOpen}
            anchor="right"
            sx={{
                backdropFilter: "blur(4px)",
                transition: "all 0.5s ease-out",
            }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ paddingTop: 5 }}>
                <List>
                    <MenuSearchBox />
                    <MenuGeneralOptions />
                    <Divider />
                    <MenuCategories />
                    <Divider />
                    <MenuAdminPanel />
                </List>
            </Box>
        </Drawer>
    );
};
