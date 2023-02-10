import {
  AttachMoney,
  Business,
  Home,
  People,
  Receipt,
  ShoppingCart,
  TaskAlt,
} from "@mui/icons-material";

import useString from "../../hooks/use-string";
import AuthorizationSwitch from "../middleware/AuthorizationSwitch";
import CollapsableDrawer from "../widgets/CollapsableDrawer";
import CollapsableDrawerGroup from "../widgets/CollapsableDrawerGroup";

interface AppDrawerProps {
  collapse: boolean;
  maxWidth: number;
  minWidth: string;
  onCollapse: () => void;
}

const AppDrawer = ({
  collapse,
  maxWidth,
  minWidth,
  onCollapse,
}: AppDrawerProps) => {
  const { $ } = useString();

  return (
    <CollapsableDrawer
      collapse={collapse}
      minWidth={minWidth}
      maxWidth={maxWidth}
      onCollapse={onCollapse}
    >
      <CollapsableDrawerGroup
        collapse={collapse}
        items={[{ name: $("label_home"), icon: <Home />, link: "" }]}
      />

      <AuthorizationSwitch role="platform-admin">
        <CollapsableDrawerGroup
          collapse={collapse}
          items={[
            {
              name: $("label_accounts"),
              icon: <Business />,
              link: "accounts",
            },
          ]}
        />
      </AuthorizationSwitch>

      <AuthorizationSwitch role="account-admin">
        <CollapsableDrawerGroup
          collapse={collapse}
          items={[{ name: $("label_users"), icon: <People />, link: "users" }]}
        />
      </AuthorizationSwitch>

      <AuthorizationSwitch role="payroll-manager">
        <CollapsableDrawerGroup
          collapse={collapse}
          items={[
            {
              name: $("label_payroll"),
              icon: <AttachMoney />,
              link: "payroll",
            },
          ]}
        />
      </AuthorizationSwitch>

      <AuthorizationSwitch role="contractor-manager">
        <CollapsableDrawerGroup
          collapse={collapse}
          items={[
            {
              name: $("label_tasks"),
              icon: <TaskAlt />,
              link: "tasks",
              count: 12,
            },
          ]}
        />
      </AuthorizationSwitch>

      <AuthorizationSwitch role="contractor">
        <CollapsableDrawerGroup
          collapse={collapse}
          items={[
            {
              name: $("label_invoices"),
              icon: <Receipt />,
              link: "invoices",
              count: 5,
            },
            {
              name: $("label_expenses"),
              icon: <ShoppingCart />,
              link: "expenses",
              count: 3,
            },
          ]}
        />
      </AuthorizationSwitch>
    </CollapsableDrawer>
  );
};

export default AppDrawer;
