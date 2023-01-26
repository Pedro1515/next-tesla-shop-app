import { ISize } from ".";

export interface ButtonVariantProps {
    label: string;
    active?: boolean;
    onClick: () => void;
}
