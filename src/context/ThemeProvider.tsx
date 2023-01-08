import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";

import { defaultTheme } from "themes/default";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MUIThemeProvider theme={defaultTheme}>
      {children}
      <CssBaseline />
    </MUIThemeProvider>
  );
};
