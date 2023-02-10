import { Route, Routes } from "react-router-dom";

import AuthorizationRouter from "../middleware/AuthorizationRouter";
import LoginForm from "../pages/auth/LoginForm";
import Users from "../pages/user/Users";
import DrawerHeader from "../widgets/DrawerHeader";
import ResponsiveContainer from "../widgets/ResponsiveContainer";

interface AppBodyProps {
  shrink: boolean;
  minShrinkBy: string;
  maxShrinkBy: number;
}

const AppBody = ({ shrink, minShrinkBy, maxShrinkBy }: AppBodyProps) => {
  return (
    <ResponsiveContainer
      shrink={shrink}
      minShrinkBy={minShrinkBy}
      maxShrinkBy={maxShrinkBy}
    >
      <DrawerHeader />
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route
          path={"accounts"}
          element={
            <AuthorizationRouter role="account-admin">
              <LoginForm />
            </AuthorizationRouter>
          }
        />

        <Route
          path={"users"}
          element={
            <AuthorizationRouter role="platform-admin">
              <Users />
            </AuthorizationRouter>
          }
        />

        <Route
          path={"payroll"}
          element={
            <AuthorizationRouter role="payroll-manager">
              <LoginForm />
            </AuthorizationRouter>
          }
        />

        <Route
          path={"tasks"}
          element={
            <AuthorizationRouter role="contractor-manager">
              <LoginForm />
            </AuthorizationRouter>
          }
        />

        <Route
          path={"invoices"}
          element={
            <AuthorizationRouter role="contractor">
              <LoginForm />
            </AuthorizationRouter>
          }
        />

        <Route
          path={"expenses"}
          element={
            <AuthorizationRouter role="contractor">
              <LoginForm />
            </AuthorizationRouter>
          }
        />
      </Routes>
    </ResponsiveContainer>
  );
};

export default AppBody;
