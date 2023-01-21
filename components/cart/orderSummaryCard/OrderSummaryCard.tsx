import { AddressDetails } from "./AddressDetails";
import { OrderDetails } from "./OrderDetails";

import {
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    Divider,
} from "@mui/material";

interface Props {
    title: string;
    address?: boolean;
}

export const OrderSummaryCard = ({ title, address }: Props) => {
    return (
        <Grid item xs={12} sm={12} md={5}>
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        {title}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    {address && <AddressDetails />}
                    <OrderDetails />
                    <Button sx={{ height: 40, mt: 2 }} fullWidth>
                        {address ? "Confirmar Orden" : "Checkout"}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};
