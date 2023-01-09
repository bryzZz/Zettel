import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { TrimInput } from "components/shared";
import { useStore } from "hooks/useStore";

import { TreeTools } from "./components/TreeTools";
import { SidebarContainer } from "./styledComponents/SidebarContainer";

export const Sidebar: React.FC = observer(() => {
  const {
    notesStore: { notes, newNote },
  } = useStore();

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<{ newNoteName: string }>();

  const [creatingNote, setCreatingNote] = useState(false);

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

  const handleSelectNote = (id: string) => {
    navigate(`notes/${id}`);
  };

  return (
    <SidebarContainer>
      <TreeTools onNewNoteClick={handleNewNoteClick} />
      {creatingNote && (
        <form onSubmit={onSubmit}>
          <TrimInput
            {...register("newNoteName", { required: true })}
            autoFocus
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
      {notes.map(({ id, name }) => (
        <Box key={id} onClick={() => handleSelectNote(id)}>
          <Typography>{name}</Typography>
        </Box>
      ))}
    </SidebarContainer>
  );
});
