import React, { useEffect, useState } from "react";
import ShowError from "../../../components/global/ShowError";
import Loading from "../../../components/global/Loading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Box,
  Divider,
  IconButton,
  Tab,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import uploaderStyles from "../../../styles/uploader.js";
import { getOrderById, updateOrder } from "../../../Api/Dashboard.js";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const UpdateOrders = ({
  open,
  onClose,
  title,
  id,
  buttonText,
  shipmentTypes,
  layers,
  ccls,
  statuses,
  customers,
  factories,
  lastOrderNumber,
}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [tabValue, setTabValue] = useState("1");
  const [lastOrderNumberValue, setlastOrderNumberValue] = useState(0);
  const [formData, setFormData] = useState({
    OdakCode: "",
    OrderNumber: "",
    CustomerCode: "",
    OdakOrderNumber: "",
    TeslimatTarihi: null,
    ShipmentDate: null,
    ShipmentRate: null,
    ShipmentType: null,
    Layers: "",
    Ccl: "",
    CclThickness: "",
    CopperThickness: "",
    Finishing: "",
    LpiColorTop: "",
    LpiColorBot: "",
    LegendPrintTop: "",
    LegendPrintBot: "",
    SpecialPrints1: "",
    SpecialPrints2: "",
    SpecialProcess1: null,
    SpecialProcess2: null,
    SpecialProcess3: null,
    SpecialProcess4: null,
    SpecialProcess5: null,
    SpecialProcess6: null,
    PanelSizeX: "",
    PanelSizeY: "",
    PanelX: "",
    Panelization: null,
    PanelY: "",
    VCutRemainingThickness: "",
    VCutTolerance: "",
    Amount: 0,
    OrderM2: 0,
    OrderTotal: null,
    IthalatMasraf: null,
    TotalMaliyet: null,
    Fiyat: null,
    ETest: 0,
    Tooling: 0,
    OnayTarihi: null,
    FilmDurumu: null,
    Status: null,
    Note: null,
    FabrikayaGiris: null,
    Remark: null,
    TahminiVaris: null,
    Defect: null,
    RejectionRepair: null,
    DefectedQuantitiy: null,
    m2: null,
    CustomerId: 0,
    FactoryId: 0,
    CreatedAt: "",
    CreatedBy: 0,
    RepeatOfGerber: null,
    Profit: null,
    DataStatus: 0,
    IsSend: false,
    ToolingAlis: null,
    m2Birim: null,
    m2SatisFiyat: 0,
    DuzeltmeNotu: null,
    DeletedAt: null,
    DeletedBy: null,
    PcbSizeX: 0,
    PcbSizeY: 0,
    SatisElemani: null,
    EkAdet1: null,
    EkAdet2: null,
    EkAdet3: null,
    EkAdet4: null,
    EkAdet5: null,
    HasRfq: false,
  });
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleUpdate = async () => {
    try {
      await updateOrder(id, formData);
      console.log("Order updated successfully");
      onClose();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    console.log("lastOrderNumberrrr", lastOrderNumber);
    const fetchOrder = async () => {
      try {
        const response = await getOrderById(id);
        setOrder(response);
        setLoading(false);
        console.log(response);
        setFormData({
          OdakCode: response?.OdakCode,
          OrderNumber: response?.OrderNumber,
          CustomerCode: response?.CustomerCode,
          OdakOrderNumber: response?.OdakOrderNumber,
          TeslimatTarihi: response?.TeslimatTarihi?.split("T")[0],
          ShipmentDate: response?.ShipmentDate?.split("T")[0],
          ShipmentRate: response?.ShipmentRate,
          ShipmentType: response?.ShipmentType,
          Layers: response?.Layers,
          Ccl: response?.Ccl,
          CclThickness: response?.CclThickness,
          CopperThickness: response?.CopperThickness,
          Finishing: response?.Finishing,
          LpiColorTop: response?.LpiColorTop,
          LpiColorBot: response?.LpiColorBot,
          LegendPrintTop: response?.LegendPrintTop,
          LegendPrintBot: response?.LegendPrintBot,
          SpecialPrints1: response?.SpecialPrints1,
          SpecialPrints2: response?.SpecialPrints2,
          SpecialProcess1: response?.SpecialProcess1,
          SpecialProcess2: response?.SpecialProcess2,
          SpecialProcess3: response?.SpecialProcess3,
          SpecialProcess4: response?.SpecialProcess4,
          SpecialProcess5: response?.SpecialProcess5,
          SpecialProcess6: response?.SpecialProcess6,
          PanelSizeX: response?.PanelSizeX,
          PanelSizeY: response?.PanelSizeY,
          PanelX: response?.PanelX,
          Panelization: response?.Panelization,
          PanelY: response?.PanelY,
          VCutRemainingThickness: response?.VCutRemainingThickness,
          VCutTolerance: response?.VCutTolerance,
          Amount: response?.Amount,
          OrderM2: response?.OrderM2,
          OrderTotal: response?.OrderTotal,
          IthalatMasraf: response?.IthalatMasraf,
          TotalMaliyet: response?.TotalMaliyet,
          Fiyat: response?.Fiyat,
          ETest: response?.ETest,
          Tooling: response?.Tooling,
          OnayTarihi: response?.OnayTarihi?.split("T")[0],
          FilmDurumu: response?.FilmDurumu,
          Status: response?.Status,
          Note: response?.Note,
          FabrikayaGiris: response?.FabrikayaGiris?.split("T")[0],
          Remark: response?.Remark,
          TahminiVaris: response?.TahminiVaris?.split("T")[0],
          Defect: response?.Defect,
          RejectionRepair: response?.RejectionRepair,
          DefectedQuant: response?.DefectedQuant,
          m2: response?.m2,
          CustomerId: response?.CustomerId,
          FactoryId: response?.FactoryId,
          CreatedAt: response?.CreatedAt,
          CreatedBy: response?.CreatedBy,
          RepeatOfGerber: response?.RepeatOfGerber,
          Profit: response?.Profit,
          DataStatus: response?.DataStatus,
          IsSend: response?.IsSend,
          ToolingAlis: response?.ToolingAlis,
          m2Birim: response?.m2Birim,
          m2SatisFiyat: response?.m2SatisFiyat,
          DuzeltmeNotu: response?.DuzeltmeNotu,
          DeletedAt: response?.DeletedAt,
          DeletedBy: response?.DeletedBy,
          PcbSizeX: response?.PcbSizeX,
          PcbSizeY: response?.PcbSizeY,
          SatisElemani: response?.SatisElemani,
          EkAdet1: response?.EkAdet1,
          EkAdet2: response?.EkAdet2,
          EkAdet3: response?.EkAdet3,
          EkAdet4: response?.EkAdet4,
          EkAdet5: response?.EkAdet5,
          HasRfq: response?.HasRfq,
        });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (error) return <ShowError error={error} />;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>
        <Box sx={uploaderStyles.header}>
          {title}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />

      {loading ? (
        <Loading />
      ) : (
        <DialogContent>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Info" value="1" />
                  <Tab label="Shipment" value="2" />
                  <Tab label="Properties" value="3" />
                  <Tab label="Sizes" value="4" />
                  <Tab label="Prices" value="5" />
                </TabList>
              </Box>
              {/* TAB 1 */}
              <TabPanel value="1">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="Status">Status</InputLabel>
                      <Select
                        labelId="Status"
                        id="Status"
                        value={formData.Status === null ? "" : formData.Status}
                        label="Status"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            Status: e.target.value,
                          })
                        }
                      >
                        {statuses.map(status => (
                          <MenuItem key={status.Id} value={status.Status}>
                            {status.Status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {/* Factory */}
                    <FormControl fullWidth>
                      <InputLabel id="Factory">Factory</InputLabel>
                      <Select
                        labelId="Factory"
                        id="Factory"
                        value={
                          formData.FactoryId === null ? "" : formData.FactoryId
                        }
                        label="Factory"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            FactoryId: e.target.value,
                          })
                        }
                      >
                        {factories.map(factory => (
                          <MenuItem key={factory.Id} value={factory.Id}>
                            {factory.Name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Order Number"
                      value={formData.OrderNumber}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          OrderNumber: e.target.value,
                        })
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Tooltip
                              title={`Copy Last Order Number: ${lastOrderNumber}`}
                            >
                              <IconButton
                                onClick={() =>
                                  navigator.clipboard
                                    .writeText(lastOrderNumber + 1)
                                    .then(() => {
                                      console.log("Text copied to clipboard!");
                                    })
                                    .catch(err => {
                                      console.error(
                                        "Failed to copy text: ",
                                        err
                                      );
                                    })
                                }
                                edge="end"
                              >
                                <ContentCopyIcon />
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Odak Order Number"
                      value={formData.OdakOrderNumber}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          OdakOrderNumber: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="Customer">Customer</InputLabel>
                      <Select
                        labelId="Customer"
                        id="Customer"
                        value={
                          formData.CustomerId === null
                            ? ""
                            : formData.CustomerId
                        }
                        label="Customer"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            CustomerId: e.target.value,
                          })
                        }
                      >
                        {customers.map(customer => (
                          <MenuItem key={customer.Id} value={customer.Id}>
                            {customer.Name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Customer Code"
                      value={formData.CustomerCode}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          CustomerCode: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  {/* Onay Tarihi ve Not */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Onay Tarihi"
                      value={formData.OnayTarihi}
                      fullWidth
                      type="date"
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          OnayTarihi: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Note"
                      value={formData.Note}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Note: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              {/* TAB 2 */}
              <TabPanel value="2">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Teslimat Tarihi"
                      value={formData.TeslimatTarihi}
                      fullWidth
                      type="date"
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          TeslimatTarihi: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Shipment Date"
                      value={formData.ShipmentDate}
                      fullWidth
                      type="date"
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          ShipmentDate: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  {/* Tahmini Varis  */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Tahmini Varis"
                      value={formData.TahminiVaris}
                      fullWidth
                      type="date"
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          TahminiVaris: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="ShipmentType">Shipment Type</InputLabel>
                      <Select
                        labelId="ShipmentType"
                        id="ShipmentType"
                        value={
                          formData.ShipmentType === null
                            ? ""
                            : formData.ShipmentType
                        }
                        label="ShipmentType"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            ShipmentType: e.target.value,
                          })
                        }
                      >
                        {shipmentTypes.map(type => (
                          <MenuItem key={type.Id} value={type.ShipmentType}>
                            {type.ShipmentType}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {/* fabrikaya giris */}
                    <TextField
                      label="Fabrikaya Giris"
                      value={formData.FabrikayaGiris}
                      fullWidth
                      type="date"
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          FabrikayaGiris: e.target.value,
                        })
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      type="number"
                      label="Shipment Rate"
                      value={formData.ShipmentRate}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          ShipmentRate: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              {/* TAB 3 */}
              <TabPanel value="3">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    {/* Layer Select component */}
                    <FormControl fullWidth>
                      <InputLabel id="Layers">Layers</InputLabel>
                      <Select
                        labelId="Layers"
                        id="Layers"
                        value={formData.Layers === null ? "" : formData.Layers}
                        label="Layers"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            Layers: e.target.value,
                          })
                        }
                      >
                        {layers.map(layer => (
                          <MenuItem key={layer.Layers} value={layer.Layers}>
                            {layer.Layers}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {/* CCl Select component */}
                    <FormControl fullWidth>
                      <InputLabel id="Ccl">Ccl</InputLabel>
                      <Select
                        labelId="Ccl"
                        id="Ccl"
                        value={formData.Ccl === null ? "" : formData.Ccl}
                        label="Ccl"
                        onChange={e =>
                          setFormData({
                            ...formData,
                            Ccl: e.target.value,
                          })
                        }
                      >
                        {ccls.map(ccl => (
                          <MenuItem key={ccl.Id} value={ccl.Ccl}>
                            {ccl.Ccl}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Ccl Thickness"
                      value={formData.CclThickness}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          CclThickness: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Copper Thickness"
                      value={formData.CopperThickness}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          CopperThickness: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Finishing"
                      value={formData.Finishing}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Finishing: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Lpi Color Top"
                      value={formData.LpiColorTop}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          LpiColorTop: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Lpi Color Bot"
                      value={formData.LpiColorBot}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          LpiColorBot: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Legend Print Top"
                      value={formData.LegendPrintTop}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          LegendPrintTop: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Legend Print Bot"
                      value={formData.LegendPrintBot}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          LegendPrintBot: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Prints 1"
                      value={formData.SpecialPrints1}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialPrints1: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Prints 2"
                      value={formData.SpecialPrints2}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialPrints2: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 1"
                      value={formData.SpecialProcess1}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess1: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 2"
                      value={formData.SpecialProcess2}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess2: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 3"
                      value={formData.SpecialProcess3}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess3: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 4"
                      value={formData.SpecialProcess4}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess4: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 5"
                      value={formData.SpecialProcess5}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess5: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Special Process 6"
                      value={formData.SpecialProcess6}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          SpecialProcess6: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              {/* TAB 4 */}
              <TabPanel value="4">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Panel Size X"
                      value={formData.PanelSizeX}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          PanelSizeX: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Panel Size Y"
                      value={formData.PanelSizeY}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          PanelSizeY: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Panel X"
                      value={formData.PanelX}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          PanelX: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Panelization"
                      value={formData.Panelization}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Panelization: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Panel Y"
                      value={formData.PanelY}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          PanelY: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="VCut Remaining Thickness"
                      value={formData.VCutRemainingThickness}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          VCutRemainingThickness: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="VCut Tolerance"
                      value={formData.VCutTolerance}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          VCutTolerance: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              {/* TAB 5 */}
              <TabPanel value="5">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Amount"
                      value={formData.Amount}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Amount: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Order M2"
                      value={formData.OrderM2}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          OrderM2: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Order Total"
                      value={formData.OrderTotal}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          OrderTotal: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Ithalat Masraf"
                      value={formData.IthalatMasraf}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          IthalatMasraf: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Total Maliyet"
                      value={formData.TotalMaliyet}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          TotalMaliyet: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Fiyat"
                      value={formData.Fiyat}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Fiyat: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="ETest"
                      value={formData.ETest}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          ETest: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Tooling"
                      value={formData.Tooling}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Tooling: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Defect"
                      value={formData.Defect}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Defect: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Rejection Repair"
                      value={formData.RejectionRepair}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          RejectionRepair: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Defected Quantity"
                      value={formData.DefectedQuantity}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          DefectedQuantity: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="m2"
                      value={formData.m2}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          m2: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Profit"
                      value={formData.Profit}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          Profit: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Tooling Alis"
                      value={formData.ToolingAlis}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          ToolingAlis: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="m2 Birim"
                      value={formData.m2Birim}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          m2Birim: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="m2 Satis Fiyat"
                      value={formData.m2SatisFiyat}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          m2SatisFiyat: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Duzeltme Notu"
                      value={formData.DuzeltmeNotu}
                      fullWidth
                      variant="outlined"
                      onChange={e =>
                        setFormData({
                          ...formData,
                          DuzeltmeNotu: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      )}
      <Divider />
      <DialogActions>
        <Button
          variant="contained"
          sx={uploaderStyles.buttonTextColor}
          color="primary"
          onClick={handleUpdate}
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

export default UpdateOrders;
