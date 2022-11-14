import React from "react";

import { Box, useTheme } from "@mui/material";

import { Sidebar } from "components";

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateColumns="200px 1fr"
      color="primary.contrastText"
      height="100%"
    >
      <Sidebar />
    </Box>
  );
};
