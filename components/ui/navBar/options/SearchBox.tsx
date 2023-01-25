import { useState } from "react";
import { useRouter } from "next/router";

import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Input, InputAdornment } from "@mui/material";
import { ButtonOpenMenu } from "./ButtonOpenMenu";
import { ButtonShowInput } from "./ButtonShowInput";

export const SearchBox = () => {
    const [showInput, setShowInput] = useState(false);

    const { push } = useRouter();
    const [inputValue, setInputValue] = useState("");

    const onSearch = () => {
        if (inputValue) {
            push(`/search/${inputValue}`);
        }
    };

    const onHideInput = () => {
        setShowInput(false);
        setInputValue("");
    };

    const onShowInput = () => {
        setShowInput(true);
    };

    if (showInput) {
        return (
            <>
                <Input
                    sx={{ display: { xs: "none", md: "inline-flex" } }}
                    type="text"
                    placeholder="Buscar..."
                    autoFocus
                    onBlur={onHideInput}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={onHideInput}
                                aria-label="toggle password visibility"
                            >
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearch()}
                />
                <ButtonOpenMenu />
            </>
        );
    }

    return (
        <>
            <ButtonShowInput onClick={onShowInput} />
            <ButtonOpenMenu />
        </>
    );
};
