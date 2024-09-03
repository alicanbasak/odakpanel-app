import React, { forwardRef, useState, useCallback, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useNavigate, useParams } from "react-router-dom";
import { Box, DialogContent, Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getFactories } from "../../Api/Factories";
import { styled } from "@mui/material/styles";
import { getRfq } from "../../Api/Rfq";
import ShowError from "../../components/global/ShowError";
import Loading from "../../components/global/Loading";
import { DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
});

const renderTable = rfqFormData => {
  return rfqFormData.length > 0
    ? rfqFormData.map(row => (
        <TableRow
          key={1}
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          }}
        >
          <TableCell
            component="th"
            scope="row"
            sx={{
              fontWeight: "bold",
              width: "230px",
              borderRight: "1px solid #ddd!important",
            }}
          >
            {row.title}
          </TableCell>

          <TableCell align="left">{row.value}</TableCell>
        </TableRow>
      ))
    : "";
};

export default function RfqDetail() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rfq, setRfq] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [factories, setFactories] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [file, setFile] = useState(null);
  const handleClose = () => {
    setOpen(false);
    navigate("/rfqs");
  };

  const [rfqFormData, setRfqFormData] = useState([]);

  const fetchFactories = useCallback(async () => {
    try {
      const response = await getFactories(
        { page: 1, pageSize: 100 },
        { search: "" }
      );
      setFactories(response.items);
      console.log(response.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchRfq = useCallback(async () => {
    try {
      const response = await getRfq(id);
      console.log(response);
      setRfq(response);
      setRfqFormData([
        {
          title: "Product Code",
          value: response.CustomerCode,
        },
        {
          title: "Odak Code",
          value: response.OdakCode,
        },
        {
          title: "Material",
          value: response.Ccl,
        },
        {
          title: "Material Thickness",
          value: response.CclThickness,
        },
        {
          title: "Copper Thickness",
          value: response.CopperThickness,
        },
        {
          title: "Layers",
          value: response.Layers,
        },
        {
          title: "Finishing",
          value: response.Finishing,
        },
        {
          title: "Solder Mask Top",
          value: response.LpiColorTop,
        },
        {
          title: "Solder Mask Bot",
          value: response.LpiColorBot,
        },
        {
          title: "Legend Print Top",
          value: response.LegendPrintTop,
        },
        {
          title: "Legend Print Bot",
          value: response.LegendPrintBot,
        },
        {
          title: "Special Print Top",
          value: response.SpecialPrints1,
        },
        {
          title: "Special Print Bot",
          value: response.SpecialPrints2,
        },
        {
          title: "Special Process",
          value: [
            response.SpecialProcess1,
            response.SpecialProcess2,
            response.SpecialProcess3,
            response.SpecialProcess4,
            response.SpecialProcess5,
            response.SpecialProcess6, // Bu satırdaki "SpecialProces6" doğru ismiyle düzeltilmiştir.
          ]
            .filter(process => process !== undefined && process !== null)
            .join(" - "),
        },
        {
          title: "PCB Size - Unit (mm)",
          value: `${response.PcbSizeX} x ${response.PcbSizeY}`,
        },
        {
          title: "Panel Size - Unit (mm)",
          value: `${response.PanelSizeX} x ${response.PanelSizeY}`,
        },
        {
          title: "Panel - Unit (mm)",
          value: `${response.PanelX} x ${response.PanelY}`,
        },
        {
          title: "Quantities",
          value: [
            response.EkAdet1,
            response.EkAdet2,
            response.EkAdet3,
            response.EkAdet4,
            response.EkAdet5,
          ]
            .filter(quantity => quantity !== null && quantity !== undefined)
            .join(", "),
        },
        {
          title: "Special Instructions",
          value: response.Note,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchRfq();
    fetchFactories();
  }, [fetchFactories]);

  if (error) {
    return <ShowError error={error} />;
  }

  return (
    <React.Fragment>
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
              RFQ: {rfq && rfq.OdakCode}
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
        <DialogContent>
          {loading ? (
            <Loading />
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  sx={{
                    mt: 2,
                    borderRadius: "15px",
                    boxShadow: "0px 0px 10px 0px #e0e0e0",
                    padding: "30px 20px",
                    pb: 4,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      fontWeight="medium"
                      sx={{
                        textDecoration: "underline",
                      }}
                      variant="h5"
                    >
                      Get Quote
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "gray",
                      }}
                      variant="body2"
                    >
                      {selectedFactory !== null && file !== null ? (
                        <span>
                          You have selected {selectedFactory.label} factory and{" "}
                          {file.name} file to get a quote. If you want to change
                          the factory or file, please click on the cancel button
                        </span>
                      ) : (
                        "Please select a factory and upload a file to get a quote."
                      )}
                    </Typography>
                  </Grid>
                  {selectedFactory !== null && file !== null ? (
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        mt: 1,
                      }}
                    >
                      <Grid item xs={12} md={6}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            width: "100%",
                            color: "white!important",
                          }}
                        >
                          Get Quote
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            width: "100%",
                          }}
                          onClick={() => {
                            setSelectedFactory(null);
                            setFile(null);
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        mt: 2,
                      }}
                    >
                      <Grid item xs={12} md={6}>
                        <Autocomplete
                          size="small"
                          key={
                            factories && factories.map(factory => factory.Id)
                          }
                          disablePortal
                          options={
                            factories &&
                            factories.map(factory => ({
                              label: factory.Name,
                              value: factory.Id,
                            }))
                          }
                          onChange={(event, newValues) => {
                            setSelectedFactory(newValues);
                          }}
                          sx={{ width: "100%" }}
                          renderInput={params => (
                            <TextField {...params} label="Select Factory" />
                          )}
                          multiple
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                          sx={{
                            width: "100%",
                            color: "white!important",
                          }}
                        >
                          Upload files
                          <VisuallyHiddenInput
                            type="file"
                            onChange={event => {
                              const selectedFile = event.target.files[0];
                              setFile(selectedFile);
                              console.log(selectedFile);
                            }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <Grid
                  container
                  sx={{
                    mt: 2,
                    borderRadius: "15px",
                    boxShadow: "0px 0px 10px 0px #e0e0e0",
                    padding: "30px 20px",
                    pb: 4,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      fontWeight="medium"
                      sx={{
                        textDecoration: "underline",
                      }}
                      variant="h5"
                    >
                      RFQ Form
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        mb: 2,
                        color: "gray",
                      }}
                      variant="body2"
                    >
                      You can show the RFQ form by clicking the button below.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mt: 2,
                        width: "100%",
                        color: "white!important",
                      }}
                      onClick={() => setFormDialogOpen(true)}
                    >
                      Show RFQ Form
                    </Button>
                    <Dialog
                      fullWidth={true}
                      maxWidth="xl"
                      open={formDialogOpen}
                      onClose={() => setFormDialogOpen(false)}
                    >
                      <DialogTitle>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setFormDialogOpen(false)}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src="/logo.png" height="50px" alt="" />
                          <img src="/header-bg.png" alt="" />
                        </Box>
                      </DialogTitle>
                      <Divider />
                      <DialogContent
                        sx={{
                          background: "url('/background.png')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <TableContainer
                          sx={{
                            backgroundColor: "transparent",
                          }}
                          component={Paper}
                        >
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableBody>{renderTable(rfqFormData)}</TableBody>
                          </Table>
                        </TableContainer>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 2,
                          }}
                          variant="body2"
                        >
                          The gerber file ia provided for RFQ purposes only. If
                          the Project is confirmed, we will send you the final
                          gerber file. Please dont use this gerber file for
                          production.
                        </Typography>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  sx={{
                    mt: 2,
                    borderRadius: "15px",
                    boxShadow: "0px 0px 10px 0px #e0e0e0",
                    padding: "30px 20px",
                    pb: 3,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      fontWeight="medium"
                      sx={{
                        textDecoration: "underline",
                      }}
                      variant="h5"
                    >
                      RFQ Details
                    </Typography>
                    <List>
                      <ListItemButton>
                        <ListItemText
                          primary="Product Code"
                          secondary={rfq && rfq.CustomerCode}
                        />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <ListItemText
                          primary="Odak Order Number"
                          secondary={rfq && rfq.OdakOrderNumber}
                        />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <ListItemText
                          primary="Acceptance Date"
                          secondary={
                            rfq &&
                            new Date(rfq.OnayTarihi).toLocaleDateString("tr-TR")
                          }
                        />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <ListItemText
                          primary="
                          Sales Representative"
                          secondary={rfq && rfq.SatisElemani}
                        />
                      </ListItemButton>
                      <Divider />
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
