import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from "react"

interface Props {}

export const ItemCounter = ({}: Props) => {
    const [counter, setCounter] = useState(1)

    const onAdd = () => {
        setCounter(counter + 1)
    }

    const onRemove = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <Box display='flex' alignItems='center'>
            <IconButton
                onClick={ onRemove }
            >
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>
                { counter }
            </Typography>
            <IconButton
                onClick={ onAdd }
            > 
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
