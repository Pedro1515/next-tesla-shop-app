import { PropsWithChildren } from "react"
import Head from "next/head"

import { Box } from '@mui/material';

import { Navbar, SideMenu } from '../ui';

interface Props extends PropsWithChildren {
  pageTitle: string,
  pageDescription: string,
  imageFullUrl?: string,
  containerWidth?: number,
}

export const ShopLayout = ({ pageTitle, pageDescription, imageFullUrl, containerWidth, children }: Props) => {
    return (
        <Box display='flex' height='100vh' flexDirection='column'>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={pageTitle} />
                <meta name="og:description" content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <main 
                style={{
                    margin: '0 auto',
                    width: '100%',
                    maxWidth: containerWidth ? `${containerWidth}px` : '1400px',
                    padding: '80px 20px',
                    flexGrow: 1,
                }}
            >
                {children}
            </main>

            <footer>
              footer
            </footer>
        </Box>
    )
}
