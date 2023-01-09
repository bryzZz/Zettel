import React, { useRef, useState } from "react";

import { Box, Button, Typography, TextField } from "@mui/material";
import MarkdownIt from "markdown-it";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { useStore } from "hooks/useStore";

export const NoteView = observer((): JSX.Element | null => {
  const {
    notesStore: { getNote, updateNote },
  } = useStore();

  const { id } = useParams();

  const { current: md } = useRef(new MarkdownIt({ html: true }));
  const [editMode, setEditMode] = useState(false);

  const currentNote = getNote(id || "");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== null && id !== undefined) {
      updateNote(id, e.target.value);
    }
  };

  return (
    <Box
      pt="1rem"
      display="flex"
      flexDirection="column"
      maxWidth="600px"
      width="100%"
      m="0 auto"
    >
      <Button
        variant="contained"
        onClick={() => setEditMode((p) => !p)}
        sx={{ alignSelf: "flex-end" }}
      >
        Toggle Mode
      </Button>
      <Typography variant="h1">{currentNote?.name}</Typography>
      {editMode ? (
        <TextField
          autoFocus
          multiline
          value={currentNote?.text || ""}
          onChange={handleTextChange}
          sx={{
            display: "block",
            "& *": {
              borderColor: "transparent!important",
            },
            "& .MuiInputBase-input": {
              padding: 0,
            },
          }}
        />
      ) : (
        <Typography
          dangerouslySetInnerHTML={{
            __html: md.render(currentNote?.text || ""),
          }}
        />
      )}
    </Box>
  );
});
