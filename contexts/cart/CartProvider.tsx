import { ICartProduct } from "@/interfaces";
import { FC, PropsWithChildren, useReducer } from "react";
import { CartContext, cartReducer } from "./";

export interface CartStateProps {
    cart: ICartProduct[];
}

const INITIAL_STATE: CartStateProps = {
    cart: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const addProduct = (product: ICartProduct) => {
        const productInCart = state.cart.find(
            (p) => p._id === product._id && p.size === product.size
        );

        const productUpdated = {
            ...productInCart,
            quantity: product.quantity + (productInCart?.quantity || 0),
        } as ICartProduct;

        dispatch({
            type: "[Cart] - Add product",
            payload: productInCart ? productUpdated : product,
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
