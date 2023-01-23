import { AppBar, Toolbar } from "@mui/material";
import { BarCategories } from "./BarCategories";
import { Logo } from "./Logo";
import { Options } from "./Options";

export const Navbar = () => (
    <AppBar
        sx={{
            boxShadow: "none",
        }}
    >
        <Toolbar
            sx={{
                justifyContent: "space-between",
                flex: 1,
            }}
        >
            <Logo />
            <BarCategories />
            <Options />
        </Toolbar>
    </AppBar>
);
