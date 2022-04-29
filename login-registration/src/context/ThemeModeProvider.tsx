import React, { FC } from "react";
import { ThemeContext, ThemeContextType } from "./themeModeContext";

export const ThemeModeProvider: FC<ThemeContextType> = ({ 
    theme,
    onChangeTheme,
    children,
}) => {
    return (
        <ThemeContext.Provider value={{ theme, onChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}