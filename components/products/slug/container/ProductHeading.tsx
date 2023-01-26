import { Typography } from "@mui/material";

interface Props {
    title: string;
    price: number;
}

export const ProductHeading = ({ title, price }: Props) => {
    return (
        <>
            <Typography variant="h1" component="h1">
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                component="h2"
            >{`$${price}`}</Typography>
        </>
    );
};
