import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { useSignOut } from "react-auth-kit";

const AppHeader = () => {
  const signOut = useSignOut();
  const logout = () => {
    signOut();
  };

  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <AppBar position={"sticky"} sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
        >
          <MenuTwoToneIcon color="neutral" />
        </IconButton>
        <Box component="img" sx={styles.appLogo} src="/logo.png" />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="User" color="neutral">
          <AccountCircleTwoToneIcon />
        </IconButton>
        <IconButton onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.light",
  },
  appLogo: {
    width: 130,
    ml: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
