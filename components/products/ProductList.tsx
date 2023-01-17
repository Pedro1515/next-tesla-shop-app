import { Grid } from "@mui/material"

import { initialData } from "@/database/products"
import { IProduct } from "@/interfaces";
import { ProductCard } from './ProductCard';

interface Props {
  products: IProduct[]
}

export const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {
        initialData.products.map(product => (
          <ProductCard key={product.slug} product={product} />
        ))
      }
    </Grid>
  )
}
