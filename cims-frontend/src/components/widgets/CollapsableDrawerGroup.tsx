import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

interface CollapsableDrawerItem {
  name: string;
  link: string;
  icon: JSX.Element;
  count?: number;
}

interface CollapsableDrawerGroupProps {
  collapse: boolean;
  items: Array<CollapsableDrawerItem>;
}

const CollapsableDrawerGroup = ({
  collapse,
  items,
}: CollapsableDrawerGroupProps) => {
  const buttonStyle = {
    minHeight: 48,
    justifyContent: collapse ? "center" : "initial",
    px: 2.5,
  };

  const iconStyle = {
    minWidth: 0,
    mr: collapse ? "auto" : 3,
    justifyContent: "center",
  };

  const textStyle = { opacity: collapse ? 0 : 1 };

  return (
    <Fragment>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={buttonStyle}
              component={Link}
              to={`/${item.link}`}
            >
              <ListItemIcon sx={iconStyle}>
                <Badge badgeContent={item.count} color="primary">
                  {item.icon}
                </Badge>
              </ListItemIcon>
              <ListItemText primary={item.name} sx={textStyle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

export default CollapsableDrawerGroup;
