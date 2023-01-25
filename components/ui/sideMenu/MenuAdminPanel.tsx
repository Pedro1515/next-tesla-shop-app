import {
    CategoryOutlined,
    ConfirmationNumberOutlined,
    AdminPanelSettings,
} from "@mui/icons-material";
import {
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";

export const MenuAdminPanel = () => {
    return (
        <>
            <ListSubheader>Panel del Admin</ListSubheader>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryOutlined />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={"Ordenes"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} />
            </ListItemButton>
        </>
    );
};
