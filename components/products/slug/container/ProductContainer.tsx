import { ICartProduct, IProduct, ISize } from "@/interfaces";
import { Grid } from "@mui/material";
import { useState } from "react";
import { ProductHeading } from "./ProductHeading";
import { ProductDetails } from "./ProductDetails";
import { ProductInfo } from "./ProductInfo";
import { useCart } from "@/utils/hooks/useCart";

interface Props {
    product: IProduct;
}

export const ProductContainer = ({ product }: Props) => {
    const { addProduct } = useCart();
    const [cartProduct, setCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    });

    const outOfStock = product.inStock === 0;
    const sizeEmpty = cartProduct.size === undefined;

    const handleSelectSize = (size: ISize) => {
        setCartProduct({
            ...cartProduct,
            size,
        });
    };

    const handleCount = (count: number) => {
        setCartProduct({
            ...cartProduct,
            quantity: count,
        });
    };

    const handleAddToCart = () => {
        addProduct(cartProduct);
    };

    return (
        <Grid item xs={12} sm={5}>
            <ProductHeading price={product.price} title={product.title} />
            <ProductDetails
                outOfStock={outOfStock}
                sizes={product.sizes}
                sizeEmpty={sizeEmpty}
                handleSelectSize={handleSelectSize}
                handleCount={handleCount}
                handleAddToCart={handleAddToCart}
                limitCount={product.inStock > 10 ? 10 : product.inStock}
            />
            <ProductInfo description={product.description} />
        </Grid>
    );
};
