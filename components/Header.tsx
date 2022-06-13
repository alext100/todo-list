import { useUser } from "@auth0/nextjs-auth0";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import HandleUser from "./HandleUser";

const Header = () => {
  const { user } = useUser();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user && (
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              All {user.name} tasks
            </Typography>
          )}
          {!user && (
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              You should be logged in to see your tasks
            </Typography>
          )}
          <HandleUser />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
