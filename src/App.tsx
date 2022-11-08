import React from "react";

import { observer } from "mobx-react-lite";
import { useRoutes } from "react-router-dom";

import { Loading } from "components/shared/Loading";

import { RootStoreContextProvider } from "./context/RootStoreContext";
import { ThemeProvider } from "./context/ThemeProvider";
import { unauthorizedRoutes, authorizedRoutes } from "./routes";
import { RootStore } from "./store/RootStore";

const rootStore = new RootStore();

export const App: React.FC = observer(() => {
  const {
    userStore: { isAuth, loading },
  } = rootStore;

  const getRoutes = () => {
    if (isAuth) {
      return authorizedRoutes;
    }

    return unauthorizedRoutes;
  };

  const routes = getRoutes();
  const routeElement = useRoutes([routes]);

  return (
    <RootStoreContextProvider value={rootStore}>
      <ThemeProvider>
        <Loading loading={loading}>{routeElement}</Loading>
      </ThemeProvider>
    </RootStoreContextProvider>
  );
});
