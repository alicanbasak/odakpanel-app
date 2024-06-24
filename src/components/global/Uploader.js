import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Divider,
  Chip,
} from "@mui/material";
import { Close as CloseIcon, Cancel as CancelIcon } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { useNotification } from "../../context/NotificationContext.js";
import uploaderStyles from "../../styles/uploader.js";

const UploaderDialog = ({ open, onClose, title, renderTable, uploads }) => {
  const { showNotification } = useNotification();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = acceptedFiles => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const formData = new FormData();

  const handleUpload = async () => {
    setUploading(true);

    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await uploads(formData);
      showNotification("File uploaded successfully", "success");

      await renderTable();
      return response;
    } catch (error) {
      showNotification("An error occurred while uploading the file", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      await handleUpload();
      setFile(null);
      onClose();
    } else {
      showNotification("Please select a file first", "warning");
    }
  };

  const handleDelete = () => {
    setFile(null);
  };

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
      <DialogContent>
        <Box {...getRootProps()} sx={uploaderStyles.content}>
          <input {...getInputProps()} />
          {!uploading && (
            <Typography>
              Drag and drop a file here, or click to select a file
            </Typography>
          )}
          {uploading && (
            <Box sx={uploaderStyles.uploading}>
              {<CircularProgress disableShrink />}
            </Box>
          )}
        </Box>
        {file && (
          <Box sx={uploaderStyles.fileBox}>
            <Chip
              key={file.name}
              kullanılabilir
              label={file.name}
              onDelete={handleDelete}
              deleteIcon={<CancelIcon />}
              sx={uploaderStyles.chip}
            />
          </Box>
        )}
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={uploaderStyles.buttonTextColor}
          disabled={!file || uploading}
        >
          Insert
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploaderDialog;
