import React from "react";
import { Alert, AlertTitle } from "@mui/material";
const ShowError = ({ error }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error.message}
    </Alert>
  );
};

export default ShowError;
