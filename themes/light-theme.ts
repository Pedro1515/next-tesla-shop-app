import { createTheme } from "@mui/material/styles";

const primaryHover = "#f2f2f2";
const radius = "3px";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1E1E1E",
        },
        secondary: {
            main: "#FFF",
            light: "#f2f2f2",
        },
    },
    typography: {
        subtitle2: {
            fontWeight: 600,
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: "fixed",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    height: 60,
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600,
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400,
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600,
                },
            },
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                },
            },
        },

        MuiIconButton: {
            styleOverrides: {
                root: {
                    ":hover": {
                        backgroundColor: primaryHover,
                    },
                },
            },
        },

        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "small",
                disableElevation: true,
            },
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...stylesByState(ownerState),
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: radius,
                    padding: "6px 15px",
                    fontWeight: 600,
                }),
            },
        },

        MuiChip: {
            defaultProps: {
                color: "error",
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    borderRadius: radius,
                    fontWeight: 600,
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "filled",
                fullWidth: true,
            },
        },

        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,.16)",
                    borderRadius: radius,
                },
            },
        },
    },
});

const stylesByState = ({ variant, color }: any) => {
    if (variant === "contained" && color === "secondary") {
        return {
            color: "#292C31",
            ":hover": {
                backgroundColor: primaryHover,
            },
        };
    }

    return {};
};
