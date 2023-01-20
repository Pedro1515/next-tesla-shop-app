import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Link from '@mui/material/Link';
import { Box, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts'

interface EmptyPageProps {
    pageTitle: string;
    pageDescription: string;
    BigIcon: React.ReactNode;
    message: string;
}

export const EmptyPage = ({ BigIcon, message, pageDescription, pageTitle }: EmptyPageProps) => {
    const { query } = useRouter();    
    const urlGoBack = query.prev ? query.prev as string : '/';

    return (
        <ShopLayout 
            pageTitle={pageTitle}
            pageDescription={pageDescription}
        >
            <Box 
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
            >
                {BigIcon}
                <Typography
                    variant='h1'
                    component='h1'
                    ml={ 2 }
                    fontSize={100}
                    fontWeight={200}
                >
                    |
                </Typography>
                <Box mt={ 1 } ml={ 2 }>
                    <Typography>
                        {message}
                    </Typography>
                    <NextLink href={urlGoBack} legacyBehavior passHref>
                        <Link>
                            <Typography variant='h2' color={'info.main'} component='p'>
                                Regresar
                            </Typography>
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}