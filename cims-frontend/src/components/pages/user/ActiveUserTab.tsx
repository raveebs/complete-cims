import { Fragment } from "react";
import useSwitch from "../../../hooks/use-switch";
import User from "../../../models/user.model";
import ActiveUserList from "./ActiveUserList";

import CreateUserForm from "./CreateUserForm";
import UserActionBar from "./UserActionBar";

interface ActiveUserTabProps {
  users: User[];
  addUser: (fname: string, lname: string, email: string) => Promise<void>;
  disableUser: (id: string) => Promise<void>;
}

const ActiveUserTab = ({ addUser, disableUser, users }: ActiveUserTabProps) => {
  const {
    isSet: isAddUserFormVisible,
    set: showAddUserForm,
    reset: hideAddUserForm,
  } = useSwitch();

  return (
    <Fragment>
      <CreateUserForm
        open={isAddUserFormVisible}
        onSubmit={async (fname, lname, email) => {
          await addUser(fname, lname, email);
          hideAddUserForm();
        }}
        onCancel={hideAddUserForm}
      />
      <UserActionBar onAddUser={showAddUserForm} />
      <ActiveUserList users={users} onDisable={disableUser} />
    </Fragment>
  );
};

export default ActiveUserTab;
