import { ICartProduct } from "@/interfaces";
import { CartStateProps } from "./CartProvider";

type CartActionTypes =
    | { type: "[Cart] - Replace cart"; payload: ICartProduct[] }
    | { type: "[Cart] - Add product"; payload: ICartProduct }
    | { type: "[Cart] - Remove product"; payload: ICartProduct }
    | { type: "[Cart] - Update product"; payload: ICartProduct }
    | { type: "[IsLoading] - Update isLoading"; payload: boolean };

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
            return {
                ...state,
                cart: [...restOfCart(action.payload), action.payload],
            };

        case "[Cart] - Update product":
            return {
                ...state,
                cart: [
                    ...state.cart.map((p) => {
                        if (
                            p._id === action.payload._id &&
                            p.size === action.payload.size
                        ) {
                            return action.payload;
                        }
                        return p;
                    }),
                ],
            };

        case "[IsLoading] - Update isLoading":
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
