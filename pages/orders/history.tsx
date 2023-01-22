import NextLink from "next/link";

import Link from "@mui/material/Link";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { Typography, Chip } from "@mui/material";
import { ShopLayout } from "@/components/layouts";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "ID",
        width: 100,
        renderCell: (params: GridRenderCellParams<any, any, any>) => (
            <NextLink href={`/orders/${params.row.id}`} legacyBehavior passHref>
                <Link underline="always">{params.row.id}</Link>
            </NextLink>
        ),
    },
    { field: "fullname", headerName: "Nombre Completo", width: 500 },
    {
        field: "status",
        headerName: "Estado",
        width: 300,
        renderCell: (params: GridRenderCellParams<any, any, any>) =>
            params.row.paid ? (
                <Chip label="Pagado" color="success" variant="outlined" />
            ) : (
                <Chip label="Pendiente" color="warning" variant="outlined" />
            ),
    },
];

const rows: GridRowsProp = [
    { id: 1, paid: false, col1: "Hello", fullname: "World" },
    { id: 2, paid: true, col1: "DataGridPro", fullname: "is Awesome" },
    { id: 3, paid: true, col1: "MUI", fullname: "is Amazing" },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            pageTitle="Historial de ordenes"
            pageDescription="Historial de odenes del cliente"
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <DataGrid rows={rows} columns={columns} />
        </ShopLayout>
    );
};

export default HistoryPage;
