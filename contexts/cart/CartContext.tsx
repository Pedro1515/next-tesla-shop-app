import { ICartProduct } from "@/interfaces";
import { createContext } from "react";

interface CartContextProps {
    cart: ICartProduct[];
    isLoading: boolean;
    addProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext<CartContextProps>(
    {} as CartContextProps
);
