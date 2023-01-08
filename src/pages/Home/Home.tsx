import React from "react";

import { Box, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";

import { NoteView, Sidebar } from "components";

export const Home: React.FC = observer(() => {
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateColumns="200px 1fr"
      color="primary.contrastText"
      height="100%"
    >
      <Sidebar />
      <NoteView />
    </Box>
  );
});
