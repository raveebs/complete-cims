import { Fragment } from "react";
import useAuth from "../../hooks/use-auth";
import ContainerProps from "../container-props";

interface AuthorizationRouterProps extends ContainerProps {
  role:
    | "platform-admin"
    | "account-admin"
    | "reviewer"
    | "contractor"
    | "payroll-manager"
    | "contractor-manager";
}

const AuthorizationSwitch = ({ role, children }: AuthorizationRouterProps) => {
  const { isAuthorised } = useAuth();
  return <Fragment>{isAuthorised(role) && children}</Fragment>;
};

export default AuthorizationSwitch;
