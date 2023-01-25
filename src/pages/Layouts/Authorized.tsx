import React from "react";

import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "components";

export const Authorized: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-main">
        <Sidebar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
