import { ICartProduct } from "@/interfaces";
import { CartStateProps } from "./CartProvider";

type CartActionTypes =
    | { type: "[Cart] - Replace cart"; payload: ICartProduct[] }
    | { type: "[Cart] - Add product"; payload: ICartProduct }
    | { type: "[Cart] - Update isLoading"; payload: boolean }
    | { type: "[Cart] - Remove product"; payload: ICartProduct };

export const cartReducer = (
    state: CartStateProps,
    action: CartActionTypes
): CartStateProps => {
    const restOfCart = (product: ICartProduct) => {
        return state.cart.filter((p) => {
            if (
                (p.size !== product.size && p._id === product._id) ||
                p._id !== product._id
            ) {
                return true;
            }
        });
    };

    switch (action.type) {
        case "[Cart] - Replace cart":
            return {
                ...state,
                cart: action.payload,
            };

        case "[Cart] - Add product":
            console.log("restOfCart", restOfCart(action.payload));
            console.log("action.payload", action.payload);

            return {
                ...state,
                cart: [...restOfCart(action.payload), action.payload],
            };

        case "[Cart] - Update isLoading":
            return {
                ...state,
                isLoading: action.payload,
            };

        case "[Cart] - Remove product":
            return {
                ...state,
                cart: restOfCart(action.payload),
            };

        default:
            return state;
    }
};
