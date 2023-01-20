import { useState } from 'react';

import { Box, Button } from '@mui/material';
import { ISize } from 'interfaces';

interface Props {
    sizes: ISize[];
    variant?: 'slim' | 'container';
}

export const SizeSelector = ({ sizes, variant = "container" }: Props) => {
    const [sizeSelected, setSizeSelected] = useState< ISize | null >(null)
    if(sizes.length === 0) return null;

    const onSelect = (size: ISize) => {
        setSizeSelected(size)
    }

    return (
        <Box>
            {
                sizes.map(( size ) => (
                    variant === 'container'
                        ? <ButtonContainer
                            key={size}
                            size={size}
                            onSelect={onSelect}
                            sizeSelected={sizeSelected}
                        />
                        : <ButtonSlim
                            key={size}
                            size={size} 
                            onSelect={onSelect} 
                            sizeSelected={sizeSelected}
                        />
                ))
            }
        </Box>
    )
}

interface ButtonVariantProps {
    size: ISize;
    sizeSelected: ISize | null;
    onSelect: (size: ISize) => void;
}

const ButtonContainer = ({ size, sizeSelected, onSelect }: ButtonVariantProps) => (
    <Button 
        size="small"
        sx={{
            mr: 1,
            mb: 1,
            backgroundColor: sizeSelected === size ? 'secondary.light' : 'transparent',
            textDecoration: sizeSelected === size ? 'underline' : 'none',
        }}
        color="secondary"
        onClick={() => onSelect(size)}
    >
        { size }
    </Button>
)

const ButtonSlim = ({ size, sizeSelected, onSelect }: ButtonVariantProps) => (
    <Button 
        size="small"
        sx={{
            mr: 1,
            mb: 1,
            backgroundColor: 'primary.main',
            textDecoration: sizeSelected === size ? 'underline' : 'none',
            color: 'white',
            ':hover': {
                backgroundColor: 'primary.dark',
                textDecoration: sizeSelected === size ? 'underline' : 'none',
            },
        }}
        style={{ 
            padding: '8px 0',
        }}
        color="secondary"
        onClick={() => onSelect(size)}
    >
        { size }
    </Button>
)