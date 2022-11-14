import createPalette from "@mui/material/styles/createPalette";

type Custom = {
  background: {
    main: string;
    light: string;
    lighter: string;
  };
  border: {
    main: string;
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    custom: Custom;
  }
  interface PaletteOptions {
    custom: Custom;
  }
}

export const defaultPalette = createPalette({
  primary: {
    main: "#191919",
    dark: "#470073",
    light: "#C5ABFC",
    contrastText: "#ffffff",
  },
  success: {
    main: "#47B347",
    dark: "#5DDE3C",
    light: "#E8F8E4",
    contrastText: "#ffffff",
  },
  error: {
    main: "#FF6B4A",
    contrastText: "#ffffff",
  },
  custom: {
    background: {
      main: "#202020",
      light: "#242424",
      lighter: "#282828",
    },
    border: {
      main: "#484848",
    },
  },
});
