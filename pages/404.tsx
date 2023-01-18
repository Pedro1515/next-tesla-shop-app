import React from 'react'
import { ShopLayout } from '../components/layouts/ShopLayout';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Custom404Page = () => {
  return (
    <ShopLayout 
      pageTitle='Pagina no encontrada'
      pageDescription='No hay nada que mostrar en esta pagina'
    >
      <Box 
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100%'
      >
        <Typography
          variant='h1'
          component='h1'
          fontSize={100}
          fontWeight={200}
        >
          404 |
        </Typography>
        <Typography 
          marginLeft={1} 
        >
            No hay contenido para mostrar según esta búsqueda
        </Typography>  
      </Box>
    </ShopLayout>
  )
}

export default Custom404Page