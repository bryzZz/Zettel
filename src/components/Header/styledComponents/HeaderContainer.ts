import { styled } from "@mui/material";

export const HeaderContainer = styled("header")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.custom.background.lighter,
  padding: theme.spacing(3, 4),
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 15%)",
  // borderBottom: `1px solid ${theme.palette.primary.light}`,

  [theme.breakpoints.down("mobile")]: {
    padding: "0 1rem",
  },
}));
