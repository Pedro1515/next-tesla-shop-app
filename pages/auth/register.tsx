import NextLink from "next/link";

import Link from "@mui/material/Link";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthLayout } from "@/components/layouts/AuthLayout";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
    return (
        <AuthLayout title="Login Layout" maxWidth={{ xs: "100%", sm: 400 }}>
            <Typography textAlign="center" variant="h1" component="h1">
                Resgistrarse
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={0}>
                    <Grid item xs={12}>
                        <TextField label="Nombre" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Apellido" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Correo" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Contraseña" />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Button sx={{ height: 50 }} fullWidth>
                            Entrar
                        </Button>
                    </Grid>
                </Grid>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    mt={1.5}
                    width="100%"
                >
                    <Typography textAlign="center">
                        ¿Ya tienes cuenta?
                    </Typography>
                    <NextLink href="/auth/login" legacyBehavior passHref>
                        <Link underline="none" ml={1} color={"info.main"}>
                            Iniciar sesión
                        </Link>
                    </NextLink>
                </Box>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;
