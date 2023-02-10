import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export type PreferenceState = {
  paletteMode: PaletteMode;
  drawerMode: "collapsed" | "expanded";
};

const paletteMode = localStorage.getItem("palette-mode");
const drawerMode = localStorage.getItem("drawer-mode");

const initialPreferenceState: PreferenceState = {
  paletteMode: paletteMode === "dark" ? paletteMode : "light",
  drawerMode: drawerMode === "expanded" ? drawerMode : "collapsed",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState: initialPreferenceState,
  reducers: {
    togglePaletteMode(state) {
      const paletteMode = state.paletteMode === "light" ? "dark" : "light";
      localStorage.setItem("palette-mode", paletteMode);
      state.paletteMode = paletteMode;
    },
    toggleDrawerMode(state) {
      const drawerMode =
        state.drawerMode === "collapsed" ? "expanded" : "collapsed";
      localStorage.setItem("drawer-mode", drawerMode);
      state.drawerMode = drawerMode;
    },
  },
});

export default preferenceSlice;

export const preferenceActions = preferenceSlice.actions;
