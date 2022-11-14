import { styled } from "@mui/material";

export const HeaderContainer = styled("header")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.custom.background.lighter,
  padding: theme.spacing(3, 0, 3, 0),
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 15%)",
  // borderBottom: `1px solid ${theme.palette.primary.light}`,
}));
