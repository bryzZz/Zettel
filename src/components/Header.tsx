"use client";

import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "hooks/useStore";

export const Header: React.FC = observer(() => {
  const { userStore } = useStore();

  return (
    <header className="flex h-14 items-center justify-end gap-4 border-b border-b-base-content border-opacity-10 px-6">
      <p>{userStore.user.email}</p>
      <button type="button" onClick={() => userStore.logout()}>
        Sign out
      </button>
    </header>
  );
});
