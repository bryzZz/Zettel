import { RouteObject } from "react-router-dom";

import { NoteView } from "components";

import { ROUTES } from "../constants";
import { Login, Register, Home } from "../pages";
import { Authorized } from "../pages/Layouts/Authorized";
import { Unauthorized } from "../pages/Layouts/Unauthorized";

export const unauthorizedRoutes: RouteObject = {
  path: ROUTES.ROOT,
  element: <Unauthorized />,
  children: [
    {
      path: ROUTES.LOGIN,
      index: true,
      element: <Login />,
    },
    {
      path: ROUTES.REGISTER,
      element: <Register />,
    },
  ],
};

export const authorizedRoutes: RouteObject = {
  path: ROUTES.ROOT,
  element: <Authorized />,
  children: [
    {
      path: ROUTES.LOGIN,
      element: <Home />,
      children: [
        {
          path: "notes/:id",
          element: <NoteView />,
        },
      ],
    },
  ],
};
