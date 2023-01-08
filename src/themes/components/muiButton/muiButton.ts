import { alpha, Theme, ComponentsVariants } from "@mui/material";

import { radius } from "themes/radius/radius";

interface muiButtonProps {
  variants: ComponentsVariants["MuiButton"];
}

export const muiButton = (theme: Theme): muiButtonProps => ({
  variants: [
    // {
    //   props: { variant: "primary" },
    //   style: {
    //     ...theme.typography.h4,
    //     borderRadius: radius.xxs,
    //     width: "11rem",
    //     height: "2.5rem",
    //     fontWeight: 500,
    //     textTransform: "none",
    //     lineHeight: "1rem",
    //     background: theme.palette.primary.main,
    //     boxShadow: `0 0.0625rem 0.3125rem ${alpha(
    //       theme.palette.primary.main,
    //       0.46
    //     )}`,
    //     color: theme.palette.secondary.contrastText,
    //     "&:hover": {
    //       color: theme.palette.primary.light,
    //       background: theme.palette.primary.main,
    //     },
    //   },
    // },
  ],
});
