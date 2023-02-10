import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import StyledDrawer from "../lib/StyledDrawer";
import DrawerHeader from "./DrawerHeader";
import { DrawerProps } from "@mui/material/Drawer";

interface CollapsableDrawerProps extends DrawerProps {
  collapse: boolean;
  maxWidth: number;
  minWidth: string;
  onCollapse: () => void;
}

const CollapsableDrawer = ({
  collapse,
  maxWidth,
  minWidth,
  onCollapse,
  children,
}: CollapsableDrawerProps) => {
  const theme = useTheme();
  const collapseIcon =
    theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />;
  return (
    <StyledDrawer
      variant="permanent"
      collapse={collapse}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      <DrawerHeader>
        <IconButton onClick={onCollapse}>{collapseIcon}</IconButton>
      </DrawerHeader>
      {children}
    </StyledDrawer>
  );
};

export default CollapsableDrawer;
