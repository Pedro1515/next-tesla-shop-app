import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Grid } from "@mui/material";
import { ShopLayout } from "components/layouts/ShopLayout";
import { ParsedUrlQuery } from "querystring";
import { ProductContainer, ProductSlideshow } from "@/components/products";
import { IProduct } from "@/interfaces";
import { dbProductBySlug, dbProductSlugs } from "@/database/dbProducts";

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
                <ProductContainer product={product} />
            </Grid>
        </ShopLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await dbProductSlugs();

    const paths = slugs.map((slug) => ({
        params: slug,
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = "" } = params as ParsedUrlQuery;
    const product = await dbProductBySlug(slug as string);

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
        revalidate: 60 * 60 * 24, // 24 hours
    };
};

export default ProductPage;
