import { useContext } from "react";
import { UiContext } from "@/contexts/ui/UiContext";

export const useUi = () => {
    const context = useContext(UiContext);

    if (!context.state) {
        throw new Error("useUi must be used within a UiProvider");
    }

    return context;
};
