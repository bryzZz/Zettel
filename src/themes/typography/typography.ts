import { ThemeOptions } from "@mui/material";
// import Golos from "assets/fonts/Golos-Text_Regular.woff";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    h3Underlined: React.CSSProperties;
    button: React.CSSProperties;
    buttonBold: React.CSSProperties;
    buttonUnderlined: React.CSSProperties;
    regularText: React.CSSProperties;
    smallText: React.CSSProperties;
    smallTextUnderlined: React.CSSProperties;
    menu: React.CSSProperties;
    tooltip: React.CSSProperties;
  }

  interface TypographyOptions {
    h3Underlined: React.CSSProperties;
    button: React.CSSProperties;
    buttonBold: React.CSSProperties;
    buttonUnderlined: React.CSSProperties;
    regularText: React.CSSProperties;
    smallText: React.CSSProperties;
    smallTextUnderlined: React.CSSProperties;
    menu: React.CSSProperties;
    tooltip: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    h3Underlined: true;
    button: true;
    buttonBold: true;
    buttonUnderlined: true;
    regularText: true;
    smallText: true;
    smallTextUnderlined: true;
    menu: true;
    tooltip: true;
  }
}

// export const golosFont = {
//   fontFamily: "Golos",
//   fontDisplay: "swap",
//   src: `local('Golos'), url(${Golos}) format('woff')`,
// };

export const typography: ThemeOptions["typography"] = {
  // fontFamily: "Golos",

  h1: {
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "1.813rem",
  },
  h2: {
    fontWeight: "bold",
    fontSize: "1.125rem",
    lineHeight: "1.063rem",
  },
  h3: {
    fontWeight: "bold",
    fontSize: "0.875rem",
    lineHeight: "1.063rem",
  },
  h4: {
    fontWeight: 400,
    fontSize: "0.813rem",
    lineHeight: "0.975rem",
  },
  h5: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: "0.75rem",
  },
  h6: {
    fontSize: "0.688rem",
    lineHeight: "0.813rem",
    fontWeight: 400,
  },

  h3Underlined: {
    fontWeight: "bold",
    fontSize: "0.875rem",
    lineHeight: "1.063rem",
    textDecoration: "underline",
  },

  button: {
    fontWeight: 500,
    fontSize: "0.813rem",
    lineHeight: "1rem",
    textTransform: "none",
  },

  buttonBold: {
    fontWeight: "bold",
    fontSize: "0.813rem",
    lineHeight: "1rem",
    textTransform: "none",
  },

  buttonUnderlined: {
    fontWeight: 500,
    fontSize: "0.813rem",
    lineHeight: "1rem",
    textDecoration: "underline",
  },

  regularText: {
    fontWeight: 500,
    fontSize: "0.813rem",
    lineHeight: "1.5rem",
  },

  smallText: {
    fontWeight: "normal",
    fontSize: "0.75rem",
    lineHeight: "1.375rem",
  },

  smallTextUnderlined: {
    fontWeight: "normal",
    fontSize: "0.75rem",
    lineHeight: "1.5rem",
    textDecoration: "underline",
  },

  menu: {
    fontWeight: "normal",
    fontSize: "0.688rem",
    lineHeight: "1rem",
  },

  tooltip: {
    fontWeight: "normal",
    fontSize: "0.6875rem",
    lineHeight: "1rem",
  },
};
