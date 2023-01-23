import { UiStateProps } from "./UiProvider";

type UiActionTypes = { type: "[isSideMenuOpen] - toggle menu" };

export const uiReducer = (
    state: UiStateProps,
    action: UiActionTypes
): UiStateProps => {
    switch (action.type) {
        case "[isSideMenuOpen] - toggle menu":
            return {
                ...state,
                isSideMenuOpen: !state.isSideMenuOpen,
                // isSideMenuOpen: true,
            };

        default:
            return state;
    }
};
