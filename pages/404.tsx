import React from "react";
import { Typography } from "@mui/material";
import { EmptyLayout } from "@/components/layouts";

const Custom404Page = () => (
    <EmptyLayout
        pageTitle="Pagina no encontrada"
        pageDescription="No hay nada que mostrar en esta pagina"
        BigIcon={
            <Typography
                variant="h1"
                component="h1"
                fontSize={100}
                fontWeight={200}
            >
                404
            </Typography>
        }
        message="No hay contenido para mostrar según esta búsqueda"
    />
);

export default Custom404Page;
