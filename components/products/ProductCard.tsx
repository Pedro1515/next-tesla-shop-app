import { Grid, CardActionArea, CardMedia, Box, Typography, Button } from '@mui/material';

import { IProduct } from "@/interfaces"
import { useState } from 'react';
import Link from 'next/link';

interface Props {
  product: IProduct
}

export const ProductCard = ({product}: Props) => {
    const [isHover, setIsHover] = useState(false)

    const productImage = isHover 
        ? '/products/'+product.images[1] 
        : '/products/'+product.images[0]

    const radius = '15px'
    const radiusButtonAdd = '0 0 14px 14px'

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
                {isHover && (
                    <Button 
                        color="primary"
                        sx={{
                            height: 70,
                            position: 'absolute', 
                            bottom: 0, 
                            borderRadius: radiusButtonAdd,
                        }}
                        fullWidth
                    >
                      Agregar al carrito +
                    </Button>
                )}
            </div>
            <Box sx={{ mt: 1 }}>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Typography fontWeight={600}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    )
}
