import NextLink from "next/link";

import Link from "@mui/material/Link";
import {
    MaleOutlined,
    FemaleOutlined,
    EscalatorWarningOutlined,
} from "@mui/icons-material";
import {
    Box,
    Divider,
    ListSubheader,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useUi } from "../../../utils/hooks/useUi";

export const MenuCategories = () => {
    const { toggleSideMenu } = useUi();
    const { push } = useRouter();

    return (
        <Box sx={{ display: { xs: "", sm: "none" } }}>
            <Divider />
            <ListSubheader>Categorias</ListSubheader>

            <NextLink href="/category/men" legacyBehavior passHref>
                <Link underline="none">
                    <ListItemButton onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <MaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Hombres"} />
                    </ListItemButton>
                </Link>
            </NextLink>

            <NextLink href="/category/women" legacyBehavior passHref>
                <Link underline="none">
                    <ListItemButton onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <FemaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Mujeres"} />
                    </ListItemButton>
                </Link>
            </NextLink>

            <NextLink href="/category/kids" legacyBehavior passHref>
                <Link underline="none">
                    <ListItemButton onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <EscalatorWarningOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Niños"} />
                    </ListItemButton>
                </Link>
            </NextLink>
        </Box>
    );
};
