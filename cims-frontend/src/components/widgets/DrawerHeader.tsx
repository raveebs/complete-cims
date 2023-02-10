import ContainerProps from "../container-props";
import StyledDrawerHeader from "../lib/StyledDrawerHeader";

interface DrawerHeaderProps extends ContainerProps {}

const DrawerHeader = ({ children }: DrawerHeaderProps) => {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
};

export default DrawerHeader;
