
import NextLink from 'next/link';

import Link from '@mui/material/Link';
import { Grid, Typography, CardActionArea, CardMedia, Box, Button } from '@mui/material';

import { initialData } from '../../database/products';
import { ItemCounter } from '../ui/ItemCounter';
interface Props {}

const productsEmpty = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[0],
]
        

export const CartList = ({}: Props) => {

    return (
        <>
            {
                productsEmpty.map( product => (
                    <Box display="flex" key={product.slug} sx={{ mb: 1, paddingRight: { md: 10 } }}>
                        <NextLink href='/product/slug' legacyBehavior passHref>
                            <Link underline='none'>
                                <CardActionArea>
                                    <CardMedia
                                        image={ `products/${ product.images[0] }` }
                                        component='img'
                                        sx={{ borderRadius:' 5px', width: 100, height: 100 }}    
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                        <Box display='flex' flexGrow={ 1 } flexDirection='column' marginLeft={ 3 }>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="body1">
                                    { product.title }
                                </Typography>
                                <Typography variant="subtitle1" ml={ 3 }>
                                    ${ product.price }
                                </Typography>
                            </Box>
                            <Typography variant="body2">
                                    Talla: <strong>M</strong>
                            </Typography>
                            <ItemCounter>
                                <Button 
                                    sx={{
                                        width: 80,
                                    }}
                                    color="secondary"
                                >
                                    Remover
                                </Button>
                            </ItemCounter>
                        </Box>

                    </Box>
                ))
            }
        </>
    )
}
