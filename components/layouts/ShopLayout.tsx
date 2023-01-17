import Head from "next/head"
import { PropsWithChildren } from "react"
import { Navbar } from '../ui/Navbar';
import { Box } from '@mui/material';

interface Props extends PropsWithChildren {
  pageTitle: string,
  pageDescription: string,
  imageFullUrl?: string,
}

export const ShopLayout = ({ pageTitle, pageDescription, imageFullUrl, children }: Props) => {
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

      <Navbar />
      <main 
        style={{
          margin: '0 auto',
          width: '100%',
          maxWidth: '1300px',
          padding: '80px 20px',
          flex: 1,
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
