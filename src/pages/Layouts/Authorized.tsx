import React from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "components";
import { useStore } from "hooks/useStore";

export const Authorized: React.FC = () => {
  const { userStore } = useStore();

  const handleLogOut = () => {
    userStore.logout();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header email={userStore.user.email} onLogOut={handleLogOut} />
      <Outlet />
    </Box>
  );
};
