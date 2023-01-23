import NextLink from "next/link";

import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

export const Logo = () => {
    return (
        <Box display="flex" flexBasis="33%" justifyContent="flex-start">
            <NextLink href="/" legacyBehavior passHref>
                <Link display="flex" alignItems="center" underline="none">
                    <Typography variant="h6">
                        Tesla |
                        <Typography marginLeft={1} component="span">
                            Shop
                        </Typography>
                    </Typography>
                </Link>
            </NextLink>
        </Box>
    );
};
