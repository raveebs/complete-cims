import { createSlice } from "@reduxjs/toolkit";

export type ErrorState = {
  error: boolean;
  message: string;
};

const initialErrorState: ErrorState = {
  error: false,
  message: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    throwError(state, action) {
      state.error = true;
      state.message = action.payload.message;
    },
    clearError(state) {
      state.error = false;
      state.message = "";
    },
  },
});

export default errorSlice;

export const errorActions = errorSlice.actions;
