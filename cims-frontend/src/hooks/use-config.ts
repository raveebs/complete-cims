import { useTheme } from "@mui/material";

const useConfig = () => {
  const theme = useTheme();
  const drawerMaxWidth = +process.env.REACT_APP_DRAWER_MAX_WIDTH!;
  const drawerMinWidth = `calc(${theme.spacing(8)} + 1px)`;
  return { drawerConfig: { drawerMinWidth, drawerMaxWidth } };
};

export default useConfig;
