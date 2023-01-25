import { ICartProduct } from "@/interfaces";
import { CartStateProps } from "./CartProvider";

type CartActionTypes =
    | {
          type: "[Cart] - Load cart from cookies | storage";
          payload: ICartProduct[];
      }
    | { type: "[Cart] - Add product"; payload: ICartProduct }
    | { type: "[Cart] - Remove product"; payload: ICartProduct };

export const cartReducer = (
    state: CartStateProps,
    action: CartActionTypes
): CartStateProps => {
    switch (action.type) {
        default:
            return state;
    }
};
