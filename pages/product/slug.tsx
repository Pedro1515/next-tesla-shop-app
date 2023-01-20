import React from 'react'

import { Grid, Typography, Box, Button, Chip } from '@mui/material';

import { ShopLayout } from 'components/layouts/ShopLayout';
import { initialData } from 'database/products';
import { ProductSlideshow, SizeSelector } from 'components/products';
import { ItemCounter } from '../../components/ui';

const product =  initialData.products[0]

const ProductPage = () => {
    return (
        <ShopLayout
            pageTitle={ product.title }
            pageDescription={ product.description }
        >
            <Grid container spacing={3}>
                {/* Slideshow */}
                <Grid item xs={ 12 } sm={ 7 } >
                    <ProductSlideshow images={product.images}/>
                </Grid>
                <Grid item xs={ 12 } sm={ 5 } >

                    {/* Titles */}
                    <Typography variant="h1" component="h1">{ product.title }</Typography>
                    <Typography variant="subtitle1" component="h2">{ `$${product.price}` }</Typography>

                    <Box width={ 350 } display="flex" flexDirection="column">
                        {/* Quantity */}
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2">Cantidad</Typography>
                            <ItemCounter />
                        </Box>

                        <SizeSelector sizes={ product.sizes }/>

                        {/* Add to cart */}
                        <Button sx={{ height: 40, mt: 2 }}>
                            Agregar al carrito
                        </Button>
                        {/* <Chip sx={{ height: 40 }} label="No hay disponibles"/> */}


                    </Box>
                    {/* Description */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle2" padding={'10px 0'} >Descripción</Typography>
                        <Typography variant="body2">{ product.description }</Typography>
                    </Box>

                </Grid>
            </Grid>
            {/* footer */}
        </ShopLayout>
    )
}

export default ProductPage