import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import uploaderStyles from "../../styles/uploader.js";

const Confirm = ({ open, onClose, title, content, buttonText, action }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box sx={uploaderStyles.header}>
          {title}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>{content}</DialogContent>
      <Divider />
      <DialogActions>
        <Button
          variant="contained"
          sx={uploaderStyles.buttonTextColor}
          color="primary"
          onClick={action}
        >
          {buttonText}
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
