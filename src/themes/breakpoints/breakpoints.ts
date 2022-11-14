import { useTheme, useMediaQuery } from "@mui/material";

declare module "@mui/material" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    zeroScreen: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export interface breakpoints {
  types: "zeroScreen" | "mobile" | "tablet" | "laptop" | "desktop";
}

export const useCurrentBreakpoint = (): breakpoints["types"] => {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.between("zeroScreen", "tablet")
  );
  const isTablet = useMediaQuery(theme.breakpoints.between("tablet", "laptop"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("laptop"));

  if (isMobile) return "zeroScreen";
  if (isDesktop) return "desktop";
  if (isTablet) return "tablet";

  return "desktop";
};

export const customBreakpoints = {
  values: {
    zeroScreen: 0,
    mobile: 321,
    tablet: 768,
    laptop: 1024,
    desktop: 1200,
  },
};
