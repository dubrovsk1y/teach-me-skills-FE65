import React, { useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

const defaultValue = {
  theme: Theme.Light,
};

export type ThemeContextType = {
  theme: Theme;
  onChangeTheme?: (theme: Theme) => void;
  children?: any;
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export const useThemeContext = () => useContext(ThemeContext);
