import { cartTotal } from "@/contexts";
import { ICartProduct } from "@/interfaces";

export const calcCartTotal = (cart: ICartProduct[]): cartTotal => {
    let total: cartTotal = {
        quantity: 0,
        price: 0,
        priceWithTaxes: 0,
        taxes: 0,
        taxesPercentage: 3,
    };

    cart.forEach((product) => {
        total.quantity += product.quantity;
        total.price += product.price * product.quantity;
    });

    total.taxes = total.price * 0.03;
    total.priceWithTaxes = total.price * 1.03;

    return {
        ...total,
        price: Number(total.price.toFixed(2)),
        priceWithTaxes: Number(total.priceWithTaxes.toFixed(2)),
        taxes: Number(total.taxes.toFixed(2)),
    };
};
