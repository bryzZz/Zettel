import { Route, Routes } from "react-router-dom";

import { Login, Register, Notes, Note } from "pages";
import { Authorized, Unauthorized } from "pages/Layouts";

export const UnauthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Unauthorized />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authorized />}>
        <Route index element={<Notes />} />
        <Route path=":id" element={<Note />} />
      </Route>
    </Routes>
  );
};
