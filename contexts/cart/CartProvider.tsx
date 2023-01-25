import { ICartProduct } from "@/interfaces";
import { FC, PropsWithChildren, useReducer } from "react";
import { CartContext, cartReducer } from "./";

export interface CartStateProps {
    state: ICartProduct[];
}

const INITIAL_STATE: CartStateProps = {
    state: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    return (
        <CartContext.Provider
            value={{
                state,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
