import { createTheme } from "@mui/material";

import { customBreakpoints } from "./breakpoints/breakpoints";
import { muiCssBaseline, muiButton } from "./components";
import { defaultPalette as palette } from "./palettes";
import { typography } from "./typography/typography";

export const theme = createTheme({
  palette,
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
