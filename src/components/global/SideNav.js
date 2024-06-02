import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  DashboardCustomizeTwoTone,
  AdminPanelSettingsTwoTone,
  CampaignTwoTone,
  CorporateFareTwoTone,
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
        {auth().role === "agency" ? (
          <MenuItem
            active={location.pathname === "/users"}
            component={<Link to={"/users"} />}
            icon={<AdminPanelSettingsTwoTone />}
          >
            <Typography variant="body">Users</Typography>
          </MenuItem>
        ) : null}
        {auth().role === "agency" ? (
          <MenuItem
            active={location.pathname === "/brands"}
            component={<Link to={"/brands"} />}
            icon={<CorporateFareTwoTone />}
          >
            <Typography variant="body">Brands</Typography>
          </MenuItem>
        ) : null}
        {auth().role === "agency" ? (
          <MenuItem
            active={location.pathname === "/campaigns"}
            component={<Link to={"/campaigns"} />}
            icon={<CampaignTwoTone />}
          >
            <Typography variant="body">Campaigns</Typography>
          </MenuItem>
        ) : null}

        {/* {auth().role === "agency" ? (
          <MenuItem
            active={location.pathname === "/reports"}
            component={<Link to={"/reports"} />}
            icon={<AssessmentTwoTone />}
          >
            <Typography variant="body">Reports</Typography>
          </MenuItem>
        ) : null} */}
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
