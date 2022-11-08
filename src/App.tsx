import React from "react";

import { useRoutes } from "react-router-dom";

import { RootStoreContextProvider } from "./context/RootStoreContext";
import { ThemeProvider } from "./context/ThemeProvider";
import { unauthorizedRoutes } from "./routes";
import { RootStore } from "./store/RootStore";

const rootStore = new RootStore();

export const App: React.FC = () => {
  const routeElement = useRoutes([unauthorizedRoutes]);

  return (
    <RootStoreContextProvider value={rootStore}>
      <ThemeProvider>{routeElement}</ThemeProvider>
    </RootStoreContextProvider>
  );
};
