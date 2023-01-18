import { Grid, CardActionArea, CardMedia, Box, Typography, CardContent, Button } from '@mui/material';

import { IProduct } from "@/interfaces"
import { useState } from 'react';

interface Props {
  product: IProduct
}

export const ProductCard = ({product}: Props) => {
  const [isHover, setIsHover] = useState(false)

  const productImage = isHover 
    ? '/products/'+product.images[1] 
    : '/products/'+product.images[0]

  const radius = '20px'
  const radiusButtonAdd = '0 0 18px 18px'

  return (
    <Grid item xs={12} sm={6} md={4} key={product.slug}>
      <div
        style={{ position: 'relative', borderRadius: radius }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
        {isHover && (
          <Button 
            sx={{ 
              backgroundColor: 'white', 
              '&:hover': {
                backgroundColor: '#f2f2f2', 
              },
              height: 70,
              position: 'absolute', 
              bottom: 0, 
              width: '100%',
              borderRadius: radiusButtonAdd,
              boxShadow: '0px 2px 2px rgb(0 0 0 / 9%)', 
            }}
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
