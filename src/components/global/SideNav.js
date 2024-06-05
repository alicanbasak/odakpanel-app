import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  DashboardCustomizeTwoTone,
  PaymentsTwoTone,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const SideNav = () => {
  const theme = useTheme();
  const auth = useAuthUser();
  const location = useLocation();
  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.white.main}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active
              ? theme.palette.neutral.medium
              : "transparent",
          }),
        }}
      >
        <MenuItem
          active={location.pathname === "/"}
          component={<Link to={"/"} />}
          icon={<DashboardCustomizeTwoTone />}
        >
          <Typography variant="body">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/rfqs"}
          component={<Link to={"/rfqs"} />}
          icon={<PaymentsTwoTone />}
        >
          <Typography variant="body">Rfq</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
