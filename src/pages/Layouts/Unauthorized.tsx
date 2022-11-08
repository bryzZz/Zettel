import React from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Unauthorized: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - calc(100vh - 100%))",
      }}
    >
      <Outlet />
    </Box>
  );
};
