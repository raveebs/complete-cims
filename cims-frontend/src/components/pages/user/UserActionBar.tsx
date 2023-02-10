import { Button } from "@mui/material";
import ActionBar from "../../widgets/ActionBar";

export interface UserActionBarProps {
  onAddUser: () => void;
}

const UserActionBar = ({ onAddUser }: UserActionBarProps) => {
  return (
    <ActionBar>
      <Button variant={"contained"} sx={{ m: 2 }} onClick={onAddUser}>
        Add
      </Button>
    </ActionBar>
  );
};

export default UserActionBar;
