import { Typography } from '@mui/material'

import { ShopLayout } from 'components/layouts/ShopLayout';
import { initialData } from 'database/products';
import { ProductList } from 'components/products/ProductList';

export default function Home () {
  return (
    <ShopLayout
      pageTitle="Tesla | Shop - Home"
      pageDescription="Encuentra los mejores productos de Tesla en un solo lugar."
    >
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" component="h2">Todos los productos</Typography>

      {!!initialData.products.length && (
        <ProductList products={initialData.products} />
      )}

    </ShopLayout>
  )
}
