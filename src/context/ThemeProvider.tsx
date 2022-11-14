import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";

import { defaultTheme } from "themes/default";

import { ChildrenType } from "../types";

interface ThemeProviderProps {
  children: ChildrenType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MUIThemeProvider theme={defaultTheme}>
      {children}
      <CssBaseline />
    </MUIThemeProvider>
  );
};
