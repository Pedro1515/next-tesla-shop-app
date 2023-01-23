import NextLink from "next/link";
import { useRouter } from "next/router";

import Link from "@mui/material/Link";
import { SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useUi } from "@/hooks/useUi";

export const Options = () => {
    const { pathname } = useRouter();
    const { onToggleSideMenu } = useUi();

    return (
        <Box display="flex" flexBasis="33%" justifyContent="flex-end">
            {/* Search */}
            <IconButton>
                <SearchOutlined />
            </IconButton>
            {/* Cart */}
            <NextLink
                href={{
                    pathname: "/cart",
                    query: { prev: pathname },
                }}
                legacyBehavior
                passHref
            >
                <Link sx={{ margin: "0 0.5rem" }}>
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>
            {/* Menu */}
            <IconButton onClick={onToggleSideMenu}>
                <MenuOutlinedIcon />
            </IconButton>
        </Box>
    );
};
