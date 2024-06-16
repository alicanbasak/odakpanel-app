import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  AdminPanelSettingsTwoTone,
  DashboardCustomizeTwoTone,
  FactoryTwoTone,
  PaidTwoTone,
  PaymentsTwoTone,
  SupervisorAccountTwoTone,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const theme = useTheme();
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
          <Typography variant="body">Orders</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/rfqs"}
          component={<Link to={"/rfqs"} />}
          icon={<PaymentsTwoTone />}
        >
          <Typography variant="body">Rfq</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/invoices"}
          component={<Link to={"/invoices"} />}
          icon={<PaidTwoTone />}
        >
          <Typography variant="body">Invoices</Typography>
        </MenuItem>
        {/* heading */}
        <MenuItem
          active={location.pathname === "/customers"}
          component={<Link to={"/customers"} />}
          icon={<SupervisorAccountTwoTone />}
        >
          <Typography variant="body">Customers</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/members"}
          component={<Link to={"/members"} />}
          icon={<AdminPanelSettingsTwoTone />}
        >
          <Typography variant="body">Members</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/factories"}
          component={<Link to={"/factories"} />}
          icon={<FactoryTwoTone />}
        >
          <Typography variant="body">Factories</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
