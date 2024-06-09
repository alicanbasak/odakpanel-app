const uploaderStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "66px",
    textAlign: "center",
    cursor: "pointer",
    marginBottom: "16px",
    position: "relative",
  },
  uploading: {
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
  },
  progressBar: { width: "80%", height: "8px", marginTop: "0px" },
  fileBox: { marginTop: "8px" },
  chip: { marginBottom: "8px" },
  buttonTextColor: { color: "white!important" },
};

export default uploaderStyles;
