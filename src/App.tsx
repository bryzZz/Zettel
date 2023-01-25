import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";

import { RootStoreContextProvider } from "./context/RootStoreContext";
import { UnauthorizedRoutes, AuthorizedRoutes } from "./routes";
import { RootStore } from "./store/RootStore";

const rootStore = new RootStore();
const queryClient = new QueryClient();

export const App: React.FC = observer(() => {
  const { userStore } = rootStore;

  const Routes = userStore.isAuth ? AuthorizedRoutes : UnauthorizedRoutes;

  return (
    <BrowserRouter>
      <RootStoreContextProvider value={rootStore}>
        <QueryClientProvider client={queryClient}>
          {userStore.isLoading ? "Loading" : <Routes />}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RootStoreContextProvider>
    </BrowserRouter>
  );
});
