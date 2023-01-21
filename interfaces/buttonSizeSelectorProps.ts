import { ISize } from ".";

export interface ButtonVariantProps {
    size: ISize;
    sizeSelected: ISize | null;
    onSelect: (size: ISize) => void;
}