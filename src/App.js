import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppHeader from "./components/global/AppHeader";
import AppRoutes from "./router/AppRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import SideNav from "./components//global/SideNav";
import theme from "./config/theme";
import { useAuthUser } from "react-auth-kit";

function App() {
  const auth = useAuthUser();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          {auth() ? <AppHeader /> : null}
          <Box sx={styles.container}>
            {auth() ? <SideNav /> : null}
            <Box component={"main"} sx={styles.mainSection}>
              <AppRoutes />
            </Box>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
