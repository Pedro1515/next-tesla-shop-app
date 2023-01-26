import { ICartProduct } from "@/interfaces";
import { CartStateProps } from "./CartProvider";

type CartActionTypes =
    | {
          type: "[Cart] - Replace cart";
          payload: ICartProduct[];
      }
    | { type: "[Cart] - Add product"; payload: ICartProduct }
    | { type: "[Cart] - Remove product"; payload: ICartProduct }
    | { type: "[Cart] - Update isLoading"; payload: boolean };

export const cartReducer = (
    state: CartStateProps,
    action: CartActionTypes
): CartStateProps => {
    switch (action.type) {
        case "[Cart] - Add product":
            return {
                ...state,
                cart: [
                    ...state.cart.filter((p) => p._id !== action.payload._id),
                    action.payload,
                ],
            };

        case "[Cart] - Replace cart":
            return {
                ...state,
                cart: action.payload,
            };

        case "[Cart] - Update isLoading":
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
};
