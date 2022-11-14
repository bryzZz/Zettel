import React from "react";

import { UserMenu } from "./components/UserMenu";
import { HeaderContentContainer } from "./styledComponents/ContentContainer";
import { HeaderContainer } from "./styledComponents/HeaderContainer";

interface HeaderProps {
  email: string;
  onLogOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ email, onLogOut }) => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <UserMenu email={email} onLogOut={onLogOut} />
      </HeaderContentContainer>
    </HeaderContainer>
  );
};
