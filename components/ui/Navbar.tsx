import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { AppBar, IconButton, Toolbar, Typography, Badge, Button } from '@mui/material';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
    const { pathname } = useRouter()
    
    return (
        <AppBar
            sx={{
                boxShadow: 'none',
            }}
        >
            <Toolbar 
                sx={{ 
                    justifyContent: 'space-between', 
                    flex: 1, 
                }}
            >
                <Box display='flex' flexBasis='33%' justifyContent='flex-start'>
                    <NextLink href='/' legacyBehavior passHref>
                        <Link display='flex' alignItems='center' underline="none">
                            <Typography variant='h6'>Tesla |
                                <Typography marginLeft={1} component="span">Shop</Typography>
                            </Typography>
                        </Link>
                    </NextLink>
                </Box>
                <Box 
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                    flexBasis='280px'
                    justifyContent='space-between'
                >
                    <NextLink href='/category/men' legacyBehavior passHref>
                        <Link underline="none">
                            <Button color="secondary">Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' legacyBehavior passHref>
                        <Link underline="none">
                            <Button color="secondary">Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kids' legacyBehavior passHref>
                        <Link underline="none">
                            <Button color="secondary">Niños</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box display='flex' flexBasis='33%' justifyContent='flex-end'>
                    {/* Search */}
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    {/* Cart */}
                    <NextLink 
                        href={{
                            pathname: '/cart',
                            query: { prev: pathname },
                        }}
                        legacyBehavior 
                        passHref
                    >
                        <Link sx={{ margin: '0 0.5rem' }}>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    </NextLink>
                    {/* Menu */}
                    <IconButton>
                        <MenuOutlinedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
