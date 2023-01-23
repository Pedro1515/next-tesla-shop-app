import { FC, PropsWithChildren, useReducer } from "react";
import { UiContext } from "./UiContext";
import { uiReducer } from "./uiReducer";

export interface UiStateProps {
    isSideMenuOpen: boolean;
}

const INITIAL_STATE: UiStateProps = {
    isSideMenuOpen: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE as any);

    const onToggleSideMenu = () => {
        dispatch({ type: "[isSideMenuOpen] - toggle menu" });
    };

    return (
        <UiContext.Provider
            value={{
                state,
                onToggleSideMenu,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};
