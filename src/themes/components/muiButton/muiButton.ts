import { alpha, Theme, ComponentsVariants } from "@mui/material";

import { radius } from "themes/radius/radius";

interface muiButtonProps {
  variants: ComponentsVariants["MuiButton"];
}

export const muiButton = (theme: Theme): muiButtonProps => ({
  variants: [
    {
      props: { variant: "primary" },
      style: {
        ...theme.typography.h4,
        borderRadius: radius.xxs,
        width: "11rem",
        height: "2.5rem",
        fontWeight: 500,
        textTransform: "none",
        lineHeight: "1rem",
        background: theme.palette.primary.main,
        boxShadow: `0 0.0625rem 0.3125rem ${alpha(
          theme.palette.primary.main,
          0.46
        )}`,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
          color: theme.palette.primary.light,
          background: theme.palette.primary.main,
        },
      },
    },
    {
      props: { variant: "secondary" },
      style: {
        ...theme.typography.h4,
        borderRadius: radius.xxs,
        width: "11rem",
        height: "2.5rem",
        textTransform: "none",
        background: theme.palette.secondary.contrastText,
        color: theme.palette.primary.dark,
        border: `0.0625rem solid ${theme.palette.primary.light}`,
        fontWeight: 500,
        lineHeight: "1rem",
        "&:hover": {
          background: theme.palette.secondary.contrastText,
        },
      },
    },
    {
      props: { variant: "smallButton" },
      style: {
        borderRadius: radius.xxs,
        textTransform: "none",
        ...theme.typography.h5,
        background: "none",
        border: `0.0625rem solid ${theme.palette.info.contrastText}`,
        height: "2rem",
        color: theme.palette.info.contrastText,
        display: "flex",
        padding: "0.705rem 0",
        justifyContent: "center",
        alignItems: "center",
        width: "8.625rem",
        ":hover": {
          background: "inherit",
        },
        ":active": {
          background: theme.palette.info.main,
        },
      },
    },
  ],
});
