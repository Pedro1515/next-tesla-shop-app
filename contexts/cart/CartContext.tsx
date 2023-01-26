import { ICartProduct } from "@/interfaces";
import { createContext } from "react";

interface CartContextProps {
    cart: ICartProduct[];
    isLoading: boolean;
    cartTotal: cartTotal;
    addProduct: (product: ICartProduct) => void;
    updateProduct: (product: ICartProduct) => void;
    removeProduct: (product: ICartProduct) => void;
}

export interface cartTotal {
    quantity: number;
    price: number;
    priceWithTaxes: number;
    taxes: number;
    taxesPercentage: number;
}

export const CartContext = createContext<CartContextProps>(
    {} as CartContextProps
);
