import { ICartProduct } from "@/interfaces";
import { FC, PropsWithChildren, useEffect, useReducer, useState } from "react";
import { CartContext, cartReducer } from "./";
import Cookie from "js-cookie";

export interface CartStateProps {
    cart: ICartProduct[];
    isLoading: boolean;
}

const INITIAL_STATE: CartStateProps = {
    cart: [],
    isLoading: true,
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const [initialized, setInitialized] = useState(false);

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

    const replaceCart = (cart: ICartProduct[]) => {
        dispatch({
            type: "[Cart] - Replace cart",
            payload: cart,
        });
        updateIsLoading(false);
    };

    const updateIsLoading = (boolean: boolean) => {
        dispatch({
            type: "[Cart] - Update isLoading",
            payload: boolean,
        });
    };

    useEffect(() => {
        const cartCookies = JSON.parse(Cookie.get("cart") ?? "[]");
        replaceCart(cartCookies);
    }, []);

    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            return;
        }

        //? state will be updated after cookies are set
        Cookie.set("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                isLoading: state.isLoading,
                addProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
