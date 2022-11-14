import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "63.75rem",
  padding: "0 1.5rem",
  margin: theme.spacing(0, "auto"),
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down("mobile")]: {
    padding: "0 1rem",
  },
}));
