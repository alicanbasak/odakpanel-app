import React, { useState } from "react";
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
import { updateGerber } from "../../Api/Dashboard";
import { useNotification } from "../../context/NotificationContext";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

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
    field: "Factory",
    headerName: "Factory",
    width: 200,
    valueGetter: params =>
      params.row.Factory && params.row.Factory.Name
        ? params.row.Factory.Name
        : params.row.FactoryId,
  },
  {
    field: "Amount",
    headerName: "Amount",
    width: 200,
    valueGetter: params => params.row.Amount,
  },
  {
    field: "OrderM2",
    headerName: "Order M2",
    width: 200,
    valueGetter: params => params.row.OrderM2,
  },
  {
    field: "OrderTotal",
    headerName: "Order Total",
    width: 200,
    valueGetter: params => params.row.OrderTotal,
  },
  {
    field: "AcceptanceDate",
    headerName: "Acceptance Date",
    width: 200,
    valueGetter: params => formatDate(params.row.OnayTarihi),
  },
  {
    field: "FabrikayaGiris",
    headerName: "Entry to Factory",
    width: 200,
    valueGetter: params =>
      formatDate(params.row.FabrikayaGiris)
        ? formatDate(params.row.FabrikayaGiris)
        : "N/A",
  },
];

const HandleChipClick = ({
  open,
  onClose,
  data,
  parentId,
  renderTable,
  factories,
}) => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedGerber, setSelectedGerber] = useState(null);

  const [newFactory, setNewFactory] = React.useState(null);

  const { showNotification } = useNotification();
  console.log("factories", factories);
  const handleSelectionChange = newSelectionModel => {
    if (newSelectionModel.length > 0) {
      const selectedRow = data.find(row => row.Id === newSelectionModel[0]);
      if (selectedRow) {
        setSelectedGerber(selectedRow);
      }
    }

    setSelectionModel(
      newSelectionModel.length > 0 ? [newSelectionModel[0]] : []
    );
    setNewFactory(null);
  };

  const handleClose = () => {
    onClose();
  };

  const handleChange = event => {
    setNewFactory(event.target.value);
    setSelectionModel([]);
  };

  const handleSave = () => {
    if (selectionModel && newFactory === null) {
      updateGerber({
        Gerber: selectedGerber.Gerber,
        Id: parentId,
        DataStatus: 2,
        FactoryId: selectedGerber.FactoryId,
      });
    }

    if (newFactory !== null) {
      updateGerber({
        Gerber: null,
        Id: parentId,
        DataStatus: 5,
        FactoryId: newFactory,
      });
    }

    showNotification("Gerber updated successfully", "success");
    renderTable();
    onClose();
  };

  return (
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
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
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
        <DataGrid
          getRowId={row => row.Id}
          rows={data}
          columns={columns}
          pageSizeOptions={[10, 20, 50, 100]}
          pageSize={20}
          autoHeight
          checkboxSelection={false}
          selectionModel={selectionModel}
          onSelectionModelChange={handleSelectionChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControl
            sx={{
              mt: 4,
              width: "400px",
            }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label">New Factory</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newFactory}
              label="New Factory"
              onChange={handleChange}
            >
              {factories.map((factory, index) => (
                <MenuItem key={index} value={factory.Id}>
                  {factory.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{ mt: 4, color: "white!important" }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default HandleChipClick;
