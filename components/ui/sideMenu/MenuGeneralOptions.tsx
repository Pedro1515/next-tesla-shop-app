import {
    AccountCircleOutlined,
    ConfirmationNumberOutlined,
    VpnKeyOutlined,
    LoginOutlined,
} from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export const MenuGeneralOptions = () => {
    return (
        <>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary={"Perfil"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={"Mis Ordenes"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <VpnKeyOutlined />
                </ListItemIcon>
                <ListItemText primary={"Ingresar"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LoginOutlined />
                </ListItemIcon>
                <ListItemText primary={"Salir"} />
            </ListItemButton>
        </>
    );
};
