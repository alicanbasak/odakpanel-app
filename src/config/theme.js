import { createTheme } from "@mui/material";

import { grey, green, red, common } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ef7757",
    },
    secondary: {
      main: grey[600],
    },
    neutral: {
      light: grey[50],
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
    },
    success: {
      main: green["A700"],
    },
    blue: {
      main: "#3f51b5",
    },

    error: {
      main: red[500],
    },
    white: {
      main: common.white,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    link: {
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      fontWeights: 500,
      color: theme.palette.primary.normal,
      display: "block",
      cursor: "pointer",
    },
    h6: {
      fontSize: "1rem",
    },
    h7: { fontSize: "0.8rem" },
    h8: { fontSize: "0.7rem" },
  },
});

export default theme;
