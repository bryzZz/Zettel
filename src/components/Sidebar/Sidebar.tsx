import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

import { TrimInput } from "components/shared";
import { useStore } from "hooks/useStore";

import { TreeTools } from "./components/TreeTools";
import { SidebarContainer } from "./styledComponents/SidebarContainer";

export const Sidebar: React.FC = observer(() => {
  const {
    notesStore: { notes, newNote, setCurrentNoteName },
  } = useStore();

  const [creatingNote, setCreatingNote] = useState(false);

  const { register, handleSubmit, reset } = useForm<{ newNoteName: string }>();

  const onSubmit = handleSubmit(({ newNoteName }) => {
    if (newNoteName) {
      newNote(newNoteName);

      setCreatingNote(false);
      reset();
    }
  });

  const handleNewNoteClick = () => {
    setCreatingNote((p) => !p);
  };

  const handleSelectNote = (noteName: string) => {
    setCurrentNoteName(noteName);
  };

  return (
    <SidebarContainer>
      <TreeTools onNewNoteClick={handleNewNoteClick} />
      {creatingNote && (
        <form onSubmit={onSubmit}>
          <TrimInput
            {...register("newNoteName", { required: true })}
            autoComplete="off"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "red",
                },
                "&:hover fieldset": {
                  borderColor: "yellow",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              },
            }}
          />
        </form>
      )}
      {Object.entries(notes).map(([noteName, noteData]) => (
        <Box key={noteName} onClick={() => handleSelectNote(noteName)}>
          <Typography>{noteName}</Typography>
        </Box>
      ))}
    </SidebarContainer>
  );
});
