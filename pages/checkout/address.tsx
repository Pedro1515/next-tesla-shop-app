import { ShopLayout } from "@/components/layouts";
import {
    Typography,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import React from "react";

const AddressPage = () => {
    return (
        <ShopLayout
            pageTitle="Dirección"
            pageDescription="Confimar dirección del destino"
            maxWidth={{
                sm: 550,
                md: 800,
            }}
        >
            <Typography variant="h1" component="h1">
                Dirección
            </Typography>

            <Grid container spacing={2} mt={0}>
                <Grid item xs={12} md={6}>
                    <TextField label="Nombre" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Apellido" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl size="small" variant="filled" fullWidth>
                        <InputLabel id="country-selector">País</InputLabel>
                        <Select labelId="country-selector" label="País">
                            <MenuItem value={1}>Argentina</MenuItem>
                            <MenuItem value={2}>Brazil</MenuItem>
                            <MenuItem value={3}>Chile</MenuItem>
                            <MenuItem value={4}>Mexico</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Ciudad" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Dirección 1" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Dirección 2" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Codigo Postal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Teléfono" />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button sx={{ height: 50, width: { xs: "100%" } }}>
                        Continual con el pedido
                    </Button>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default AddressPage;
