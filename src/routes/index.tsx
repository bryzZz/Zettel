import { RouteObject } from "react-router-dom";

import { ROUTES } from "../constants";
import { Login, Register } from "../pages";
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
