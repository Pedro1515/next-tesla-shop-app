import { useState } from "react";

import { Box } from "@mui/material";

import { ISize } from "interfaces";
import { ButtonSlim } from "./ButtonSlim";
import { ButtonContainer } from "./ButtonContainer";

interface Props {
    sizes: ISize[];
    variant?: "slim" | "container";
}

export const SizeSelector = ({ sizes, variant = "container" }: Props) => {
    const [sizeSelected, setSizeSelected] = useState<ISize | null>(null);

    const onSelect = (size: ISize) => {
        setSizeSelected(size);
    };

    if (variant === "container") {
        return (
            <Box>
                {sizes.map((size) => (
                    <ButtonContainer
                        key={size}
                        size={size}
                        onSelect={onSelect}
                        sizeSelected={sizeSelected}
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
                    size={size}
                    onSelect={onSelect}
                    sizeSelected={sizeSelected}
                />
            ))}
        </Box>
    );
};
