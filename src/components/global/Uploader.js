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

const UploaderDialog = ({ open, onClose, title }) => {
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
      }
    }, 500);
  };

  const handleSubmit = () => {
    console.log("Files submitted:", files);
    // Gerekli işlemleri burada yapabilirsiniz.
  };

  const handleDelete = fileToDelete => {
    setFiles(files.filter(file => file !== fileToDelete));
    setUploaded(false);
    setProgress(0);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "8px",
            padding: "66px",
            textAlign: "center",
            cursor: "pointer",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          <input {...getInputProps()} />
          {!uploading && (
            <Typography>
              Drag and drop files here, or click to select files
            </Typography>
          )}
          {uploading && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 1)",
                flexDirection: "column",
              }}
            >
              <LinearProgress
                variant="buffer"
                value={progress}
                sx={{ width: "80%", height: "8px", marginTop: "0px" }}
              />
            </Box>
          )}
        </Box>
        {files.length > 0 && uploaded && (
          <Box sx={{ marginTop: "8px" }}>
            {files.map(file => (
              <Chip
                key={file.path}
                label={file.path}
                onDelete={() => handleDelete(file)}
                deleteIcon={<CancelIcon />}
                sx={{ marginBottom: "8px" }}
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
