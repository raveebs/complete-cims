import { DarkMode, LightMode } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { MouseEventHandler, useState } from "react";
import useAuth from "../hooks/use-auth";
import usePreference from "../hooks/use-preference";

export interface HeaderActionProps {
  mode?: string;
  onModeToggle?: () => void;
}

const HeaderActions = ({ mode, onModeToggle, ...props }: HeaderActionProps) => {
  const { togglePaletteMode } = usePreference();
  const { getAuthState, clearAuthState } = useAuth();
  const { user } = getAuthState();
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();

  const toggleModeIcon = mode === "dark" ? <LightMode /> : <DarkMode />;

  const settings = ["Profile", "Account", "Dashboard"];

  const handleOpenUserMenu: MouseEventHandler = (event) => {
    setAnchorElUser(event.currentTarget as HTMLElement);
  };

  const handleCloseUserMenu = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (event?.currentTarget !== null)
      setAnchorElUser(event?.currentTarget as HTMLElement);
  };

  const handleLogout = () => {
    clearAuthState();
  };

  return (
    <Box sx={{ flexGrow: 0 }} {...props}>
      <IconButton color="inherit" onClick={togglePaletteMode}>
        {toggleModeIcon}
      </IconButton>

      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Raveendra Tudangil" src={user?.avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem id={setting} key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderActions;
