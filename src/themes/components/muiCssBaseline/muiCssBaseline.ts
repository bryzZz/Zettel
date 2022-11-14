import { ComponentsOverrides } from "@mui/material";

import { defaultPalette } from "themes/palettes/defaultPalette";

// import { golosFont } from "../../typography/typography";

interface muiCssBaselineProps {
  styleOverrides: ComponentsOverrides["MuiCssBaseline"];
}

export const muiCssBaseline = (): muiCssBaselineProps => ({
  styleOverrides: {
    // "@font-face": [golosFont],
    "body, html, #root": {
      height: "100%",
      backgroundColor: defaultPalette.custom.background.main,
    },
    "*": {
      margin: 0,
      padding: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
});
