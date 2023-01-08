import React from "react";

import { UserMenu } from "./components/UserMenu";
import { HeaderContainer } from "./styledComponents/HeaderContainer";

interface HeaderProps {
  email: string;
  onLogOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ email, onLogOut }) => {
  return (
    <HeaderContainer>
      <UserMenu email={email} onLogOut={onLogOut} />
    </HeaderContainer>
  );
};
