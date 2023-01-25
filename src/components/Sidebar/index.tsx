"use client";

import React from "react";

import { BsPencilSquare } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useNoteNames } from "hooks";

import { NoteLink } from "./NoteLink";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading, createMutation, deleteMutation } = useNoteNames();

  const handleCreateNote = () => {
    const id = uuid();

    navigate(`/${id}?new=true`);

    createMutation.mutate({ id, title: "Unnamed" });
  };

  const handleDeleteNote = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        if (params?.id === id) {
          navigate("/");
        }
      },
    });
  };

  return (
    <aside className="h-full basis-80 border-r border-r-base-content border-opacity-10 p-4">
      <div className="mb-2 flex items-center justify-end">
        <div className="tooltip tooltip-bottom" data-tip="Create note">
          <button
            type="button"
            onClick={handleCreateNote}
            className="rounded p-1 hover:bg-base-content hover:bg-opacity-10"
          >
            <BsPencilSquare className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isLoading && "Loading..."}

      <div className="flex flex-col items-stretch gap-[1px]">
        {data?.map(({ id, title }) => (
          <NoteLink
            key={id}
            to={`/${id}`}
            onDelete={() => handleDeleteNote(id)}
          >
            {title}
          </NoteLink>
        ))}
      </div>
    </aside>
  );
};
