import { styled } from "@mui/material/styles";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface StyledAppBarProps extends MuiAppBarProps {
  shrink: boolean;
  shrinkBy: number;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !["shrink", "shrinkBy"].includes(prop as string),
})<StyledAppBarProps>(({ theme, shrink, shrinkBy }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(shrink && {
    marginLeft: shrinkBy,
    width: `calc(100% - ${shrinkBy}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default StyledAppBar;
