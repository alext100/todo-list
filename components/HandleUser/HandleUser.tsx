import { useUser } from "@auth0/nextjs-auth0";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

const HandleUser: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  if (user) {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={`${user.given_name}'s avatar`}
              src={`${user.given_name}`}
            />
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
          <MenuItem>
            <Typography textAlign="center">
              <Link href="/api/auth/me">Profile</Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">
              <Link href="/api/auth/logout">Logout</Link>
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <Button color="inherit">
      <Link href="/api/auth/login">Login</Link>
    </Button>
  );
};

export default HandleUser;
