import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { MuiStyleBP } from "@/interfaces/muiStyleBreackPoints";

interface Props extends PropsWithChildren {
    title: string;
    maxWidth?: MuiStyleBP;
}

export const AuthLayout = ({ title, maxWidth, children }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Box
                sx={{
                    margin: "0 auto",
                    width: "100%",
                    maxWidth: maxWidth ? maxWidth : "1400px",
                    padding: "80px 20px",
                    flexGrow: 1,
                    height: "calc(100vh - 64px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                component="main"
            >
                {children}
            </Box>
        </>
    );
};
