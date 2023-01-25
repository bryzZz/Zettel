import React from "react";

import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

export const Notes: React.FC = observer(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});
