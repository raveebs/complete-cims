import { AppBar, AppBarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledActionBarProps extends AppBarProps {}

const StyledActionBar = styled(AppBar)<StyledActionBarProps>(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.text.primary,
}));

export default StyledActionBar;
