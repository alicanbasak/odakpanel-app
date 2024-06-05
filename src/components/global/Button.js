import React from "react";
import { Button } from "@mui/material";
const InsertButton = ({ title }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        color: "white!important",
      }}
    >
      {title}
    </Button>
  );
};

export default InsertButton;
