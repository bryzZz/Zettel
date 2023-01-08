import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";

import { Button } from "components/shared";
import { Icon } from "components/shared/Icon";

interface TreeToolsProps {
  onNewNoteClick: () => void;
}

export const TreeTools: React.FC<TreeToolsProps> = observer(
  ({ onNewNoteClick }) => {
    return (
      <Box>
        <Button variant="iconBtn" onClick={onNewNoteClick}>
          <Icon type="newNote" width="1.5rem" height="1.5rem" color="#fff" />
        </Button>
      </Box>
    );
  }
);
