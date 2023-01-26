import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    onCountChange: (count: number) => void;
    initialCount?: number;
    limit?: number;
}

export const ItemCounter = ({
    onCountChange,
    limit,
    initialCount,
    children,
}: Props) => {
    const [counter, setCounter] = useState(initialCount || 1);

    const limitReached = typeof limit === "number" && counter >= limit;

    const onAdd = () => {
        if (limitReached) return;
        const newCounter = counter + 1;
        setCounter(newCounter);
        onCountChange(newCounter);
    };

    const onRemove = () => {
        const newCounter = counter - 1;
        setCounter(newCounter);
        onCountChange(newCounter);
    };

    return (
        <Box display="flex" alignItems="center">
            <IconButton onClick={onRemove} disabled={counter === 1}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: "center" }}>
                {counter}
            </Typography>
            <IconButton onClick={onAdd} disabled={limitReached}>
                <AddCircleOutline />
            </IconButton>
            {children}
        </Box>
    );
};
