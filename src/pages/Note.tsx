/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useCallback, useState } from "react";

import { BsPencil, BsBook } from "react-icons/bs";
import { useParams } from "react-router-dom";

import { NoteView } from "components";
import { useNote } from "hooks";

export const Note: React.FC = () => {
  const id = useParams().id as string;

  const { data, isLoading, mutation } = useNote(id);

  const [editMode, setEditMode] = useState(true);

  const handleMutateTitle = useCallback(
    (newTitle: string) => {
      mutation.mutate({ id, updates: { title: newTitle } });
    },
    [id, mutation]
  );

  const handleMutateText = useCallback(
    (newText: string) => {
      const updates: Record<string, string> = { text: newText };

      mutation.mutate({ id, updates });
    },
    [id, mutation]
  );

  console.log("update Note");

  // console.log(data);

  return (
    <div className="h-full">
      <div className="flex justify-end pt-4 pr-4">
        <div className="tooltip tooltip-left" data-tip="Change view">
          <label className="swap rounded p-1 hover:bg-base-content hover:bg-opacity-10">
            <input
              type="checkbox"
              checked={editMode}
              onChange={() => setEditMode((p) => !p)}
            />

            <BsBook className="swap-on h-5 w-5" />
            <BsPencil className="swap-off h-5 w-5" />
          </label>
        </div>
      </div>
      {isLoading ? (
        "Note Loading"
      ) : (
        <NoteView
          editMode={editMode}
          initialTitle={data?.title ?? "Unnamed"}
          initialText={data?.text ?? ""}
          mutateTitle={handleMutateTitle}
          mutateText={handleMutateText}
        />
      )}
    </div>
  );
};
