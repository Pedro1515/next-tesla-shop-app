import { createContext } from "react";
import { UiStateProps } from "./UiProvider";

interface UiContextProps {
    state: UiStateProps;
    toggleSideMenu: () => void;
}

export const UiContext = createContext<UiContextProps>({} as UiContextProps);
