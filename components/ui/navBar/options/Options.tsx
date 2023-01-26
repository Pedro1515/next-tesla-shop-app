import NextLink from "next/link";

import Link from "@mui/material/Link";
import { Box, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useUi } from "@/hooks/useUi";
import { SearchBox } from "./SearchBox";
import { useCart } from "@/hooks/useCart";

export const Options = () => {
    const { toggleSideMenu } = useUi();
    const { cartTotal } = useCart();

    return (
        <Box display="flex" flexBasis="33%" justifyContent="flex-end">
            <SearchBox />
            {/* Cart */}
            <NextLink href="/cart" legacyBehavior passHref>
                <Link sx={{ margin: "0 0.5rem" }}>
                    <IconButton>
                        <Badge badgeContent={cartTotal} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>
            {/* Menu */}
            <IconButton onClick={toggleSideMenu}>
                <MenuOutlinedIcon />
            </IconButton>
        </Box>
    );
};
