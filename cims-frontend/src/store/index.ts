import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import errorSlice from "./error.slice";
import preferenceSlice from "./preference.slice";

const store = configureStore({
  reducer: {
    preference: preferenceSlice.reducer,
    auth: authSlice.reducer,
    error: errorSlice.reducer,
  },
});

export default store;
