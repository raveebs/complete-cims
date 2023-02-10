import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../controllers/auth.controller";
import Account from "../models/account.model";
import User from "../models/user.model";
import {
  authActions,
  AuthenticatedState,
  AuthState,
} from "../store/auth.slice";

const useAuth = () => {
  const authState: AuthState = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const authenticate = (user: User, account: Account) => {
    const userString = JSON.stringify(user);
    const accountString = JSON.stringify(account);
    dispatch(
      authActions.authenticate({ user: userString, account: accountString })
    );
  };

  const getAuthState = (): AuthenticatedState => {
    if (
      authState.state === "un_authenticated" ||
      authState.state === "logged_in"
    ) {
      throw Error("UnAuthenticated");
    }
    return authState;
  };

  const clearAuthState = async () => {
    await logout();
    dispatch(authActions.logout({}));
  };

  const refreshAuth = () => {
    dispatch(authActions.refresh({}));
  };

  const isAuthorised = (
    role:
      | "platform-admin"
      | "account-admin"
      | "reviewer"
      | "contractor"
      | "payroll-manager"
      | "contractor-manager"
  ) => {
    console.log(getAuthState().user, role);
    return (
      getAuthState()
        .user.roles.map((current) => current.type)
        .indexOf(role) !== -1
    );
  };

  return {
    authenticate,
    authState: authState.state,
    getAuthState,
    refreshAuth,
    isAuthorised,
    clearAuthState,
  };
};

export default useAuth;
