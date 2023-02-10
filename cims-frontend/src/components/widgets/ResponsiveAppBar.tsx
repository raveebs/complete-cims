import { Menu } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import ContainerProps from "../container-props";
import StyledAppBar from "../lib/StyledAppBar";

interface ResponsiveAppBarProps extends ContainerProps {
  shrink: boolean;
  shrinkBy: number;
  onShrink: () => void;
}

const ResponsiveAppBar = ({
  shrink,
  shrinkBy,
  onShrink,
  children,
}: ResponsiveAppBarProps) => {
  return (
    <StyledAppBar position="fixed" shrink={shrink} shrinkBy={shrinkBy}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onShrink}
          edge="start"
          sx={{ mr: 2, ...(shrink && { display: "none" }) }}
        >
          <Menu />
        </IconButton>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
};

export default ResponsiveAppBar;
