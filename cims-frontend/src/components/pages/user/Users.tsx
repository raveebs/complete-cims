import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  disableUser,
  enableUser,
  findAll,
} from "../../../controllers/user.controller";

import useRefresher from "../../../hooks/use-refresher";
import useSelector from "../../../hooks/use-selector";
import User from "../../../models/user.model";

import TabGroupHeader from "../../widgets/TabGroupHeader";
import TabPanel from "../../widgets/TabPanel";
import ActiveUserTab from "./ActiveUserTab";
import InActiveUserTab from "./InActiveUserTab";

const Users = () => {
  const { onRefresh, refresh } = useRefresher();
  const { selected: selectedTab, select: setSelectedTab } = useSelector(0);
  const [activeUsers, setActiveUsers] = useState<User[]>([]);
  const [inActiveUsers, setInActiveUsers] = useState<User[]>([]);

  const addUserHandler = async (
    fname: string,
    lname: string,
    email: string
  ) => {
    await addUser(fname, lname, email);
    refresh();
  };

  const removeUserHandler = async (id: string) => {
    await deleteUser(id);
    refresh();
  };

  const disableUserHandler = async (id: string) => {
    await disableUser(id);
    refresh();
  };

  const enableUserHandler = async (id: string) => {
    await enableUser(id);
    refresh();
  };

  const fetchActiveUsersHandler = async () => {
    const users = await findAll("active");
    setActiveUsers(users);
  };

  const fetchInActiveUsersHandler = async () => {
    const users = await findAll("in_active");
    setInActiveUsers(users);
  };

  const fetchUsersHandler = useCallback(async () => {
    if (selectedTab === 0) {
      await fetchActiveUsersHandler();
    }
    if (selectedTab === 1) {
      await fetchInActiveUsersHandler();
    }
  }, [selectedTab]);

  useEffect(() => {
    fetchUsersHandler();
  }, [selectedTab, fetchUsersHandler, onRefresh]);

  return (
    <Box sx={{ width: "100%" }}>
      <TabGroupHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <Tab label="Active" />
        <Tab label="Inactive" />
      </TabGroupHeader>

      <TabPanel value={selectedTab} index={0}>
        <ActiveUserTab
          users={activeUsers}
          addUser={addUserHandler}
          disableUser={disableUserHandler}
        />
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <InActiveUserTab
          users={inActiveUsers}
          removeUser={removeUserHandler}
          enableUser={enableUserHandler}
        />
      </TabPanel>
    </Box>
  );
};

export default Users;
