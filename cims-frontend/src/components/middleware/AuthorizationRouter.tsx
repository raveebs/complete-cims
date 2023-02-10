import { Fragment } from "react";
import useAuth from "../../hooks/use-auth";
import useError from "../../hooks/use-error";
import useString from "../../hooks/use-string";
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

const AuthorizationRouter = ({ role, children }: AuthorizationRouterProps) => {
  const { isAuthorised } = useAuth();
  const { throwError } = useError();
  const { $ } = useString();
  console.log(role, isAuthorised(role));

  if (!isAuthorised(role)) throwError($("message_unauthorised"));

  return <Fragment>{children}</Fragment>;
};

export default AuthorizationRouter;
