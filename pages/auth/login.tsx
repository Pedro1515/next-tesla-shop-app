import NextLink from "next/link";

import Link from "@mui/material/Link";
import { Typography, TextField, Button, Box, Chip } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { EMAIL_PATTERN } from "@/utils/validations";
import { tesloApi } from "../../api/tesloApi";

import Cookies from "js-cookie";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>();

    const [errorRes, setErrorRes] = useState(false);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const { data: user } = await tesloApi.post("/auth/login", data);
            Cookies.set("token", user.token);
        } catch (error) {
            setErrorRes(true);
            setTimeout(() => {
                setErrorRes(false);
            }, 3000);
        }
    };

    return (
        <AuthLayout title="Login Layout" maxWidth={{ xs: "100%", sm: 400 }}>
            <form
                style={{ width: "100%" }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Typography textAlign="center" variant="h1" component="h1">
                        Iniciar sesión
                    </Typography>
                    <TextField
                        {...register("email", {
                            required: true,
                            pattern: EMAIL_PATTERN,
                        })}
                        type="email"
                        label="Correo"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        {...register("password", {
                            required: true,
                            minLength: 6,
                        })}
                        type="password"
                        label="Contraseña"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button
                        disabled={Object.keys(errors).length > 0}
                        type="submit"
                        sx={{ height: 50 }}
                        fullWidth
                    >
                        Entrar
                    </Button>
                    {errorRes && (
                        <Chip
                            label={"Error en las credenciales"}
                            color="error"
                        />
                    )}
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        mt={1.5}
                        width="100%"
                    >
                        <Typography textAlign="center">
                            ¿No tienes cuenta?
                        </Typography>
                        <NextLink href="/auth/register" legacyBehavior passHref>
                            <Link underline="none" ml={1} color={"info.main"}>
                                Registrate
                            </Link>
                        </NextLink>
                    </Box>
                </Box>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;
