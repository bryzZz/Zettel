import { createTheme } from "@mui/material";

import { customBreakpoints } from "./breakpoints/breakpoints";
import { muiCssBaseline, muiButton } from "./components";
import { defaultPalette as palette } from "./palettes";
import { typography } from "./typography/typography";

type Gradient = {
  [key: string]: string;
};
declare module "@mui/material/styles" {
  interface ThemeOptions {
    gradients?: Gradient;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    gradients?: Gradient;
  }
}

export const theme = createTheme({
  palette,
  gradients: {
    blue: "linear-gradient(180deg, #5783F1 -31.73%, rgba(87, 131, 241, 0.6) 146.15%)",
    default: "",
  },
  typography,
  spacing: [0, 2, 4, 8, 16, 32, 48, 64],
  breakpoints: customBreakpoints,
});

export const defaultTheme = createTheme({
  ...theme,
  components: {
    MuiCssBaseline: muiCssBaseline(),
    MuiButton: muiButton(theme),
  },
});
