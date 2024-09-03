import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  AppBar,
  Toolbar,
  Button,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid } from "@mui/x-data-grid";
import ShowError from "../global/ShowError";
import Loading from "../global/Loading";
import {
  getOrdersByOrderNumber,
  getReportOrdersByOrderNumber,
} from "../../Api/Dashboard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  {
    field: "Gerber",
    headerName: "Gerber",
    width: 200,
    valueGetter: params => params.row.Gerber,
  },
  {
    field: "OdakCode",
    headerName: "Odak Code",
    width: 200,
    valueGetter: params => params.row.OdakCode,
  },
  {
    field: "CustomerCode",
    headerName: "Customer Code",
    width: 200,
    valueGetter: params => params.row.CustomerCode,
  },
];

const HandleOrderNumberClick = ({ open, onClose, orderNumber }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get excel report and download
  const handleReport = async () => {
    try {
      const reportBlob = await prepareReport(orderNumber);

      // Blob'u URL'ye çevirme
      const url = window.URL.createObjectURL(new Blob([reportBlob]));

      // Bu URL'yi kullanarak bir link oluştur ve tıkla
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `orders_${orderNumber}.xlsx`); // Dosya ismini belirle
      document.body.appendChild(link);
      link.click();

      // Link'i DOM'dan kaldır
      link.parentNode.removeChild(link);
    } catch (error) {
      setError(error);
    }
  };

  const prepareReport = async orderNumber => {
    const response = await getReportOrdersByOrderNumber(orderNumber);
    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getOrdersByOrderNumber(orderNumber);
        setData(items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [orderNumber]);

  const handleClose = () => {
    onClose();
  };

  if (error) {
    <ShowError error={error} />;
  }

  return loading ? (
    Loading
  ) : (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "white!important" }}>
            {`Order Number: ${orderNumber}`}
          </Typography>
          <IconButton
            edge="start"
            color="white"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "20px" }}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReport}
            sx={{ marginBottom: "20px", color: "white!important" }}
          >
            Excel export
          </Button>
          <DataGrid
            getRowId={row => row.Id}
            rows={data}
            columns={columns}
            pageSizeOptions={[10, 20, 50, 100]}
            pageSize={20}
            autoHeight
            checkboxSelection={false}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default HandleOrderNumberClick;
