import React from "react";

import { Grid, Typography, Box, Button } from "@mui/material";

import { ShopLayout } from "components/layouts/ShopLayout";
import { ProductSlideshow, SizeSelector } from "components/products";
import { ItemCounter } from "../../components/ui";
import { IProduct } from "@/interfaces";
import { dbProducts } from "@/database/dbProducts";

interface Props {
    product: IProduct | null;
}

const ProductPage = ({ product }: Props) => {
    if (!product) return <div>404</div>;

    return (
        <ShopLayout
            pageTitle={product.title}
            pageDescription={product.description}
        >
            <Grid container spacing={3}>
                <ProductSlideshow images={product.images} />
                <Grid item xs={12} sm={5}>
                    {/* Titles */}
                    <Typography variant="h1" component="h1">
                        {product.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                    >{`$${product.price}`}</Typography>

                    <Box width={350} display="flex" flexDirection="column">
                        {/* Quantity */}
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2">
                                Cantidad
                            </Typography>
                            <ItemCounter />
                        </Box>

                        <SizeSelector sizes={product.sizes} />

                        {/* Add to cart */}
                        <Button disabled sx={{ height: 40, mt: 2 }}>
                            Agregar al carrito
                        </Button>
                        {/* <Chip sx={{ height: 40 }} label="No hay disponibles"/> */}
                    </Box>
                    {/* Description */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle2" padding={"10px 0"}>
                            Descripción
                        </Typography>
                        <Typography variant="body2">
                            {product.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* footer */}
        </ShopLayout>
    );
};

export const getServerSideProps = async ({ params }: any) => {
    const { slug = "" } = params;
    const product = await dbProducts(slug);

    if (!product) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            product,
        },
    };
};

export default ProductPage;
