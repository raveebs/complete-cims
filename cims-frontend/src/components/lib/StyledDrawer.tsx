import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

interface DrawerProps extends MuiDrawerProps {
  collapse: boolean;
  maxWidth: number;
  minWidth: string;
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    prop !== "collapse" && prop !== "maxWidth" && prop !== "minWidth",
})<DrawerProps>(({ theme, collapse, maxWidth, minWidth }) => ({
  ...{
    "& .MuiDrawer-paper": collapse
      ? {
          width: minWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
        }
      : {
          width: maxWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        },
  },
}));

export default StyledDrawer;
