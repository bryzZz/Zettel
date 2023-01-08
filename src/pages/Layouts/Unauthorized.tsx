import React from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Unauthorized: React.FC = () => {
  return (
    <Box
      width="100%"
      maxWidth="1200px"
      display="flex"
      justifyContent="center"
      m="0 auto"
      p="1rem"
    >
      <Outlet />
    </Box>
  );
};
