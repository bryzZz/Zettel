import { Box, Typography } from "@mui/material";

import { Button } from "components/shared";

interface UserMenuProps {
  email: string;
  onLogOut: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ email, onLogOut }) => {
  return (
    <Box display="flex" alignItems="center" gap="1rem">
      <Typography variant="regularText" color="primary.contrastText">
        {email}
      </Typography>
      <Button variant="contained" onClick={onLogOut}>
        Log Out
      </Button>
    </Box>
  );
};
