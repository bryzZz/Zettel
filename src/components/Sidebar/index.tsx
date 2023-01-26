"use client";

import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { TabPanel, Tabs } from "components/shared";
import { IconInput } from "components/UI";
import { useNoteNames } from "hooks";

import { NoteLink } from "./NoteLink";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [search, setSearch] = useState("");
  const tags =
    [...search.matchAll(/tags:(\w+)/g)].map((m) => m[1]).join(".") || undefined;

  const { data, isLoading, createMutation, deleteMutation } =
    useNoteNames(tags);

  const [tab, setTab] = useState(0);

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

  const handleTabChange = (newValue: number) => {
    setTab(newValue);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <aside className="h-full w-full max-w-[17rem] border-r border-r-base-content border-opacity-10">
      <Tabs
        className="mb-2"
        tabsLabels={["Notes", "Search"]}
        value={tab}
        onChange={handleTabChange}
      />

      <TabPanel value={tab} tabValue={0}>
        <div className="mb-2 flex h-[34px] items-center justify-end px-4">
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
      </TabPanel>

      <TabPanel value={tab} tabValue={1}>
        <div className="mb-2 px-4">
          <IconInput
            Icon={<BiSearch className="scale-125" />}
            value={search}
            onChange={handleSearchChange}
            placeholder="Enter search"
          />
        </div>
      </TabPanel>

      <div className="flex flex-col items-stretch gap-[1px] px-4">
        {data?.length === 0 && <p>No matches found</p>}
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
