import { SxProps, Typography } from "@mui/material";

import ContainerProps from "../container-props";

export interface HeaderProps extends ContainerProps {
  sx?: SxProps;
}

export const Header = ({ sx, children, ...props }: HeaderProps) => {
  return (
    <Typography variant="h6" sx={{ ...sx, flexGrow: 1 }} {...props}>
      {children}
    </Typography>
  );
};
