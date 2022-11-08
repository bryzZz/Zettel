import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { ChildrenType } from "../types";

const theme = createTheme();

interface ThemeProviderProps {
  children: ChildrenType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MUIThemeProvider>
  );
};
