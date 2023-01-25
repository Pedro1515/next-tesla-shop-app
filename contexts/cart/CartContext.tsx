import { createContext } from "react";
import { CartStateProps } from "./CartProvider";

interface CartContextProps {
    state: CartStateProps;
}

export const CartContext = createContext<CartContextProps>(
    {} as CartContextProps
);
