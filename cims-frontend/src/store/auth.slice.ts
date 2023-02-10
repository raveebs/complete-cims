import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import Account from "../models/account.model";
import User from "../models/user.model";

type UnAuthenticatedState = { state: "un_authenticated" };
type LoggedIn = { state: "logged_in" };
export type AuthenticatedState = {
  state: "authenticated";
  user: User;
  account: Account;
};

export type AuthState = UnAuthenticatedState | LoggedIn | AuthenticatedState;

let initialAuthState: AuthState;

initialAuthState = {
  state: "un_authenticated",
};

const authSlice = createSlice<AuthState, SliceCaseReducers<AuthState>>({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    refresh(state, action) {
      state.state = "logged_in";
    },
    authenticate(state, action) {
      state.state = "authenticated";
      if (state.state === "authenticated") {
        state.user = JSON.parse(action.payload.user);
        state.account = JSON.parse(action.payload.account);
      }
    },
    logout(state, action) {
      localStorage.clear();
      state.state = "un_authenticated";
    },
  },
});

export default authSlice;

export const authActions = authSlice.actions;
