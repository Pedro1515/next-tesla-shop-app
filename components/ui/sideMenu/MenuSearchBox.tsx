import { useState } from "react";

import { SearchOutlined } from "@mui/icons-material";
import { ListItem, Input, InputAdornment, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useUi } from "../../../utils/hooks/useUi";

export const MenuSearchBox = () => {
    const { toggleSideMenu } = useUi();
    const { push } = useRouter();
    const [inputValue, setInputValue] = useState("");

    const onSearch = () => {
        if (inputValue) {
            toggleSideMenu();
            push(`/search/${inputValue}`);
        }
    };

    return (
        <ListItem
            sx={{
                display: { xs: "inline-flex", md: "none" },
            }}
        >
            <Input
                type="text"
                placeholder="Buscar..."
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={onSearch}
                            aria-label="toggle password visibility"
                        >
                            <SearchOutlined />
                        </IconButton>
                    </InputAdornment>
                }
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
        </ListItem>
    );
};
