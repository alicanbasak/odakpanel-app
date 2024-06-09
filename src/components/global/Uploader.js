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
  LinearProgress,
  Divider,
  Chip,
} from "@mui/material";
import { Close as CloseIcon, Cancel as CancelIcon } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { useNotification } from "../../context/NotificationContext.js";
import uploaderStyles from "../../styles/uploader.js";

const UploaderDialog = ({ open, onClose, title }) => {
  const { showNotification } = useNotification();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  const onDrop = acceptedFiles => {
    setFiles(acceptedFiles);
    handleUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = files => {
    setUploading(true);
    setProgress(0);
    setUploaded(false);
    let totalSize = files.reduce((acc, file) => acc + file.size, 0);
    let loaded = 0;

    const interval = setInterval(() => {
      loaded += totalSize * 0.1;
      let fakeProgress = Math.min((loaded / totalSize) * 100, 100);
      setProgress(fakeProgress);

      if (fakeProgress >= 100) {
        clearInterval(interval);
        setUploading(false);
        setUploaded(true);
        showNotification("Upload completed successfully", "success");
      }
    }, 500);
  };

  const handleSubmit = () => {
    console.log("Files submitted:", files);
  };

  const handleDelete = fileToDelete => {
    setFiles(files.filter(file => file !== fileToDelete));
    setUploaded(false);
    setProgress(0);
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
              Drag and drop files here, or click to select files
            </Typography>
          )}
          {uploading && (
            <Box sx={uploaderStyles.uploading}>
              <LinearProgress
                variant="buffer"
                value={progress}
                sx={uploaderStyles.progressBar}
              />
            </Box>
          )}
        </Box>
        {files.length > 0 && uploaded && (
          <Box sx={uploaderStyles.fileBox}>
            {files.map(file => (
              <Chip
                key={file.path}
                label={file.path}
                onDelete={() => handleDelete(file)}
                deleteIcon={<CancelIcon />}
                sx={uploaderStyles.chip}
              />
            ))}
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
          disabled={!uploaded}
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
