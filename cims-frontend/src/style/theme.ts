import { createTheme, PaletteMode, Theme } from "@mui/material";

const appTheme = (mode: PaletteMode): Theme =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#5D1049",
        dark: "#430D3A",
        light: "#720D5D",
      },
    },
  });

export default appTheme;
