import { Fragment, useCallback, useEffect, useState } from "react";
import { getCurrentUser } from "../../controllers/user.controller";
import useAuth from "../../hooks/use-auth";
import useError from "../../hooks/use-error";
import useString from "../../hooks/use-string";
import ContainerProps from "../container-props";
import Loading from "../pages/auth/Loading";
import LoginForm from "../pages/auth/LoginForm";

interface AuthenticationRouterProps extends ContainerProps {}

const AuthenticationRouter = ({ children }: AuthenticationRouterProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { throwError } = useError();
  const { $ } = useString();

  const { authState, authenticate } = useAuth();
  const loadAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      const user = await getCurrentUser();
      authenticate(user, { id: "1" });
    } catch (e) {
      throwError($("message_something_went_wrong"));
    } finally {
      setIsLoading(false);
    }
  }, [authenticate, throwError, $]);

  const isAuthenticated = authState === "authenticated";

  useEffect(() => {
    const isSessionAlive = localStorage.getItem("_session") != null;
    if (!isLoading && !isAuthenticated && isSessionAlive) {
      loadAuth();
    }
  }, [isLoading, isAuthenticated, loadAuth, authState]);

  return (
    <Fragment>
      {isAuthenticated ? children : isLoading ? <Loading /> : <LoginForm />}
    </Fragment>
  );
};

export default AuthenticationRouter;
