import { useRouter } from "next/router";
import NextLink from "next/link";

import Link from "@mui/material/Link";
import { Box, Button } from "@mui/material";

interface Props {}

export const Categories = ({}: Props) => {
    const { pathname } = useRouter();

    return (
        <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexBasis="280px"
            justifyContent="space-between"
        >
            <NextLink href="/category/men" legacyBehavior passHref>
                <Link underline="none">
                    <Button
                        color="secondary"
                        sx={{
                            backgroundColor: pathname.includes("/men")
                                ? "secondary.light"
                                : "",
                        }}
                    >
                        Hombres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/category/women" legacyBehavior passHref>
                <Link underline="none">
                    <Button
                        color="secondary"
                        sx={{
                            backgroundColor: pathname.includes("/women")
                                ? "secondary.light"
                                : "",
                        }}
                    >
                        Mujeres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/category/kids" legacyBehavior passHref>
                <Link underline="none">
                    <Button
                        color="secondary"
                        sx={{
                            backgroundColor: pathname.includes("/kids")
                                ? "secondary.light"
                                : "",
                        }}
                    >
                        Niños
                    </Button>
                </Link>
            </NextLink>
        </Box>
    );
};
