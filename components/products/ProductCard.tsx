import { useState } from 'react';
import Link from 'next/link';

import { Grid, CardActionArea, CardMedia, Box, Typography } from '@mui/material';

import { IProduct } from "@/interfaces"
import { SizeSelector } from './SizeSelector';

interface Props {
  product: IProduct
}

export const ProductCard = ({product}: Props) => {
    const [isHover, setIsHover] = useState(false)

    const productImage = isHover 
        ? '/products/'+product.images[1] 
        : '/products/'+product.images[0]

    const radius = '5px'

    return (
        <Grid item xs={12} sm={6} md={4} key={product.slug}>
            <div
                style={{ position: 'relative', borderRadius: radius }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <Link href={`/product/slug`} prefetch={ false } legacyBehavior>
                    <CardActionArea sx={{ borderRadius: radius }}>
                        <CardMedia
                            component="img"
                            image={productImage}
                            alt={product.title}
                            sx={{
                                borderRadius: radius,
                            }}
                        />
                    </CardActionArea>
                </Link>
                {isHover && <BoxAddToCart {...product}/>}
            </div>
            <Box sx={{ mt: 1 }}>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Typography fontWeight={600}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    )
}

const BoxAddToCart = (product: IProduct) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Box 
            color="primary"
            sx={{
                height: 70,
                position: 'absolute', 
                bottom: 0, 
                borderRadius: '0 0 4px 4px',
                backgroundColor: 'primary.main',
                boxShadow: "0 8px 16px 0 rgba(0,0,0,.16)",
                width: '100%',
                color: 'white',
            }}
            fontWeight={600}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={14}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            //TODO: paddingX={2}
        >
            {isHover 
                ? <SizeSelector variant='slim' sizes={ product.sizes }/>
                : 'Agregar al carrito +'
            }
        </Box>
    )
}