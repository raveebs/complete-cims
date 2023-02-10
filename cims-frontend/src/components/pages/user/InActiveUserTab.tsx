import User from "../../../models/user.model";
import InActiveUserList from "./InActiveUserList";

interface InActiveUserTabProps {
  users: User[];
  enableUser: (id: string) => Promise<void>;
  removeUser: (id: string) => Promise<void>;
}

const InActiveUserTab = ({
  users,
  enableUser,
  removeUser,
}: InActiveUserTabProps) => {
  return (
    <InActiveUserList
      users={users}
      onDelete={removeUser}
      onDisable={enableUser}
    />
  );
};
export default InActiveUserTab;
