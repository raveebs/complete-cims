import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledConatinerProps extends BoxProps {
  shrink: boolean;
  minShrinkBy: string;
  maxShrinkBy: number;
}

const StyledConatiner = styled(Box, {
  shouldForwardProp: (prop) =>
    !["shrink", "maxShrinkBy", "minShrinkBy"].includes(prop as string),
})<StyledConatinerProps>(({ theme, shrink, maxShrinkBy, minShrinkBy }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: minShrinkBy,
  ...(shrink && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${maxShrinkBy}px`,
  }),
}));

export default StyledConatiner;
