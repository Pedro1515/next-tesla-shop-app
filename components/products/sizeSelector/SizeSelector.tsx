import { useState } from "react";

import { Box } from "@mui/material";

import { ISize } from "interfaces";
import { ButtonSlim } from "./ButtonSlim";
import { ButtonContainer } from "./ButtonContainer";

interface Props {
    sizes: ISize[];
    variant?: "slim" | "container";
    onSelectSize?: (size: ISize) => void;
}

export const SizeSelector = ({
    sizes,
    variant = "container",
    onSelectSize = () => {},
}: Props) => {
    const [sizeSelected, setSizeSelected] = useState<ISize | null>(null);

    const onSelect = (size: ISize) => {
        setSizeSelected(size);
        onSelectSize(size);
    };

    if (variant === "container") {
        return (
            <Box>
                {sizes.map((size) => (
                    <ButtonContainer
                        key={size}
                        label={size}
                        active={sizeSelected === size}
                        onClick={() => onSelect(size)}
                    />
                ))}
            </Box>
        );
    }

    return (
        <Box display="flex" flex={1} justifyContent="space-evenly">
            {sizes.map((size) => (
                <ButtonSlim
                    key={size}
                    label={size}
                    active={sizeSelected === size}
                    onClick={() => onSelect(size)}
                />
            ))}
        </Box>
    );
};
