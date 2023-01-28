import { PropsWithChildren } from "react";
import Head from "next/head";

import { Box } from "@mui/material";

import { Navbar, SideMenu } from "../ui";
import { MuiStyleBP } from "@/interfaces/muiStyleBreackPoints";

interface Props extends PropsWithChildren {
    pageTitle: string;
    pageDescription: string;
    imageFullUrl?: string;
    maxWidth?: MuiStyleBP;
}

export const ShopLayout = ({
    pageTitle,
    pageDescription,
    imageFullUrl,
    children,
    maxWidth,
}: Props) => {
    return (
        <Box display="flex" height="100vh" flexDirection="column">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={pageTitle} />
                <meta name="og:description" content={pageDescription} />
                {imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )}
            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <Box
                sx={{
                    margin: "0 auto",
                    width: "100%",
                    maxWidth: maxWidth ? maxWidth : "1400px",
                    padding: "80px 40px",
                    flexGrow: 1,
                }}
                component="main"
            >
                {children}
            </Box>

            {/* <footer>footer</footer> */}
        </Box>
    );
};
