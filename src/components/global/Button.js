import React from "react";
import { Button } from "@mui/material";
const InsertButton = ({ title, action }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        color: "white!important",
      }}
      onClick={action}
    >
      {title}
    </Button>
  );
};

export default InsertButton;
