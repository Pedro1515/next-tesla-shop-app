import { ICartProduct } from "@/interfaces";
import { createContext } from "react";

interface CartContextProps {
    cart: ICartProduct[];
    isLoading: boolean;
    cartTotal: number;
    addProduct: (product: ICartProduct) => void;
    updateProduct: (product: ICartProduct) => void;
    removeProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext<CartContextProps>(
    {} as CartContextProps
);
