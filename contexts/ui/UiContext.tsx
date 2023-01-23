import { createContext } from "react";
import { UiStateProps } from "./UiProvider";

interface UiContextProps {
    state: UiStateProps;
    onToggleSideMenu: () => void;
}

export const UiContext = createContext<UiContextProps>({} as UiContextProps);
