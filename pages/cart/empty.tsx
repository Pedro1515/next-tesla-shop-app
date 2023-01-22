import { EmptyLayout } from "@/components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";

const Empty = () => (
    <EmptyLayout
        pageTitle="Carrito vacío"
        pageDescription="No hay artículos en el carito de compras"
        BigIcon={<RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />}
        message="Su carrito esta vacío"
    />
);

export default Empty;
