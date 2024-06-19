// import { showBgColor, showTextColor } from "../../styles/tableRowColors";
// import { calculateProfit } from "../../utils/calculateProfit";
// import { Chip } from "@mui/material";
//
// export function setStandartColumn(role) {
//   return [
//     {
//       field: "Id",
//       headerName: "Id",
//       valueGetter: params => params.row.Id,
//       sortable: true,
//     },
//     {
//       field: "Gerber",
//       headerName: "Gerber",
//       sortable: true,
//       renderCell: params => {
//         return (
//           <Chip
//             label={params.row.Gerber}
//             sx={{
//               color: showTextColor(params.row.DataStatus),
//               fontWeight: "500",
//               borderRadius: "5px",
//               backgroundColor: showBgColor(params.row.DataStatus),
//               width: "100%",
//             }}
//           />
//         );
//       },
//     },
//     {
//       field: "OdakCode",
//       headerName: "OdakCode",
//       sortable: true,
//     },
//     {
//       field: "OrderNumber",
//       headerName: "OrderNumber",
//       sortable: true,
//     },
//     {
//       field: "CustomerCode",
//       headerName: "CustomerCode",
//       sortable: true,
//     },
//     {
//       field: "OdakOrderNumber",
//       headerName: "OdakOrderNumber",
//       sortable: true,
//     },
//     {
//       field: "TeslimatTarihi",
//       headerName: "TeslimatTarihi",
//       sortable: true,
//     },
//     {
//       field: "ShipmentDate",
//       headerName: "ShipmentDate",
//       sortable: true,
//     },
//     {
//       field: "ShipmentRate",
//       headerName: "ShipmentRate",
//       sortable: true,
//     },
//     {
//       field: "ShipmentType",
//       headerName: "ShipmentType",
//       sortable: true,
//     },
//     {
//       field: "Layers",
//       headerName: "Layers",
//       sortable: true,
//     },
//     {
//       field: "Ccl",
//       headerName: "Ccl",
//       sortable: true,
//     },
//     {
//       field: "CclThickness",
//       headerName: "CclThickness",
//       sortable: true,
//     },
//     {
//       field: "CopperThickness",
//       headerName: "CopperThickness",
//       sortable: true,
//     },
//     {
//       field: "Finishing",
//       headerName: "Finishing",
//       sortable: true,
//     },
//     {
//       field: "LpiColorTop",
//       headerName: "LpiColorTop",
//       sortable: true,
//     },
//     {
//       field: "LpiColorBot",
//       headerName: "LpiColorBot",
//       sortable: true,
//     },
//     {
//       field: "LegendPrintTop",
//       headerName: "LegendPrintTop",
//       sortable: true,
//     },
//     {
//       field: "LegendPrintBot",
//       headerName: "LegendPrintBot",
//       sortable: true,
//     },
//     {
//       field: "SpecialPrints1",
//       headerName: "SpecialPrints1",
//       sortable: true,
//     },
//     {
//       field: "SpecialPrints2",
//       headerName: "SpecialPrints2",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess1",
//       headerName: "SpecialProcess1",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess2",
//       headerName: "SpecialProcess2",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess3",
//       headerName: "SpecialProcess3",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess4",
//       headerName: "SpecialProcess4",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess5",
//       headerName: "SpecialProcess5",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess6",
//       headerName: "SpecialProcess6",
//       sortable: true,
//     },
//     {
//       field: "PanelSizeX",
//       headerName: "PanelSizeX",
//       sortable: true,
//     },
//     {
//       field: "PanelSizeY",
//       headerName: "PanelSizeY",
//       sortable: true,
//     },
//     {
//       field: "PanelX",
//       headerName: "PanelX",
//       sortable: true,
//     },
//     {
//       field: "Panelization",
//       headerName: "Panelization",
//       sortable: true,
//     },
//     {
//       field: "PanelY",
//       headerName: "PanelY",
//       sortable: true,
//     },
//     {
//       field: "VCutRemainingThickness",
//       headerName: "VCutRemainingThickness",
//       sortable: true,
//     },
//     {
//       field: "VCutTolerance",
//       headerName: "VCutTolerance",
//       sortable: true,
//     },
//     {
//       field: "Amount",
//       headerName: "Amount",
//       sortable: true,
//     },
//     {
//       field: "OrderM2",
//       headerName: "OrderM2",
//       sortable: true,
//     },
//     {
//       field: "OrderTotal",
//       headerName: "OrderTotal",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "IthalatMasraf",
//       headerName: "IthalatMasraf",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "TotalMaliyet",
//       headerName: "TotalMaliyet",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "Fiyat",
//       headerName: "Fiyat",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "ETest",
//       headerName: "ETest",
//       sortable: true,
//     },
//     {
//       field: "Tooling",
//       headerName: "Tooling",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "OnayTarihi",
//       headerName: "OnayTarihi",
//       sortable: true,
//     },
//     {
//       field: "FilmDurumu",
//       headerName: "FilmDurumu",
//       sortable: true,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       sortable: true,
//     },
//     {
//       field: "Note",
//       headerName: "Note",
//       sortable: true,
//     },
//     {
//       field: "FabrikayaGiris",
//       headerName: "FabrikayaGiris",
//       sortable: true,
//     },
//     {
//       field: "Remark",
//       headerName: "Remark",
//       sortable: true,
//     },
//     {
//       field: "TahminiVaris",
//       headerName: "TahminiVaris",
//       sortable: true,
//     },
//     {
//       field: "Defect",
//       headerName: "Defect",
//       sortable: true,
//     },
//     {
//       field: "RejectionRepair",
//       headerName: "RejectionRepair",
//       sortable: true,
//     },
//     {
//       field: "DefectedQuantitiy",
//       headerName: "DefectedQuantitiy",
//       sortable: true,
//     },
//     {
//       field: "m2",
//       headerName: "m2",
//       sortable: true,
//     },
//     {
//       field: "CustomerName",
//       headerName: "Customer Name",
//       sortable: true,
//     },
//     {
//       field: "FactoryId",
//       headerName: "Factory",
//       sortable: true,
//       valueGetter: params => {
//         return params.row.Factory && params.row.Factory.Name
//           ? params.row.Factory.Name
//           : params.row.FactoryId;
//       },
//     },
//     {
//       field: "CreatedAt",
//       headerName: "CreatedAt",
//       sortable: true,
//     },
//     {
//       field: "CreatedBy",
//       headerName: "CreatedBy",
//       sortable: true,
//     },
//     {
//       field: "RepeatOfGerber",
//       headerName: "RepeatOfGerber",
//       sortable: true,
//     },
//     {
//       field: "Profit",
//       headerName: "Profit",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//       valueGetter: params => {
//         return calculateProfit(
//           params.row.OrderTotal,
//           params.row.OrderM2,
//           params.row.ShipmentRate,
//           params.row.Fiyat
//         );
//       },
//     },
//     {
//       field: "DataStatus",
//       headerName: "DataStatus",
//       sortable: true,
//     },
//     {
//       field: "IsSend",
//       headerName: "IsSend",
//       sortable: true,
//     },
//     {
//       field: "ToolingAlis",
//       headerName: "ToolingAlis",
//       sortable: true,
//     },
//     {
//       field: "m2Birim",
//       headerName: "m2Birim",
//       sortable: true,
//     },
//     {
//       field: "m2SatisFiyat",
//       headerName: "m2SatisFiyat",
//       sortable: true,
//     },
//     {
//       field: "DuzeltmeNotu",
//       headerName: "DuzeltmeNotu",
//       sortable: true,
//     },
//     {
//       field: "DeletedAt",
//       headerName: "DeletedAt",
//       sortable: true,
//     },
//     {
//       field: "DeletedBy",
//       headerName: "DeletedBy",
//       sortable: true,
//     },
//     {
//       field: "PcbSizeX",
//       headerName: "PcbSizeX",
//       sortable: true,
//     },
//     {
//       field: "PcbSizeY",
//       headerName: "PcbSizeY",
//       sortable: true,
//     },
//     {
//       field: "SatisElemani",
//       headerName: "SatisElemani",
//       sortable: true,
//     },
//     {
//       field: "EkAdet1",
//       headerName: "EkAdet1",
//       sortable: true,
//     },
//     {
//       field: "EkAdet2",
//       headerName: "EkAdet2",
//       sortable: true,
//     },
//     {
//       field: "EkAdet3",
//       headerName: "EkAdet3",
//       sortable: true,
//     },
//     {
//       field: "EkAdet4",
//       headerName: "EkAdet4",
//       sortable: true,
//     },
//     {
//       field: "EkAdet5",
//       headerName: "EkAdet5",
//       sortable: true,
//     },
//   ].filter(Boolean);
// }
//
// export function setColumnsForPricing(role) {
//   return [
//     {
//       field: "Id",
//       headerName: "Id",
//       valueGetter: params => params.row.Id,
//       sortable: true,
//     },
//     {
//       field: "Gerber",
//       headerName: "Gerber",
//       sortable: true,
//       renderCell: params => {
//         return (
//           <Chip
//             label={params.row.Gerber}
//             sx={{
//               color: showTextColor(params.row.DataStatus),
//               fontWeight: "500",
//               borderRadius: "5px",
//               backgroundColor: showBgColor(params.row.DataStatus),
//               width: "100%",
//             }}
//           />
//         );
//       },
//     },
//     {
//       field: "OdakCode",
//       headerName: "OdakCode",
//       sortable: true,
//     },
//     {
//       field: "CustomerName",
//       headerName: "Customer Name",
//       sortable: true,
//     },
//     {
//       field: "FactoryId",
//       headerName: "Factory",
//       sortable: true,
//       // List factoryId instead of factoryName
//       valueGetter: params => {
//         return params.row.Factory["Name"]
//           ? params.row.Factory["Name"]
//           : params.row.FactoryId;
//       },
//     },
//     {
//       field: "OrderNumber",
//       headerName: "OrderNumber",
//       sortable: true,
//     },
//     {
//       field: "Layers",
//       headerName: "Layers",
//       sortable: true,
//     },
//     {
//       field: "Ccl",
//       headerName: "Ccl",
//       sortable: true,
//     },
//     {
//       field: "CclThickness",
//       headerName: "CclThickness",
//       sortable: true,
//     },
//     {
//       field: "CopperThickness",
//       headerName: "CopperThickness",
//       sortable: true,
//     },
//     {
//       field: "Finishing",
//       headerName: "Finishing",
//       sortable: true,
//     },
//     {
//       field: "LpiColorTop",
//       headerName: "LpiColorTop",
//       sortable: true,
//     },
//     {
//       field: "LpiColorBot",
//       headerName: "LpiColorBot",
//       sortable: true,
//     },
//     {
//       field: "LegendPrintTop",
//       headerName: "LegendPrintTop",
//       sortable: true,
//     },
//     {
//       field: "LegendPrintBot",
//       headerName: "LegendPrintBot",
//       sortable: true,
//     },
//     {
//       field: "SpecialPrints1",
//       headerName: "SpecialPrints1",
//       sortable: true,
//     },
//     {
//       field: "SpecialPrints2",
//       headerName: "SpecialPrints2",
//       sortable: true,
//     },
//     {
//       field: "SpecialProcess1",
//       headerName: "SpecialProcess1",
//       sortable: true,
//     },
//     {
//       field: "Amount",
//       headerName: "Amount",
//       sortable: true,
//     },
//     {
//       field: "OrderM2",
//       headerName: "OrderM2",
//       sortable: true,
//     },
//     {
//       field: "OrderTotal",
//       headerName: "OrderTotal",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//     },
//     {
//       field: "TeslimatTarihi",
//       headerName: "TeslimatTarihi",
//       sortable: true,
//     },
//     {
//       field: "ShipmentDate",
//       headerName: "ShipmentDate",
//       sortable: true,
//     },
//     {
//       field: "ShipmentType",
//       headerName: "ShipmentType",
//       sortable: true,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       sortable: true,
//     },
//     {
//       field: "DuzeltmeNotu",
//       headerName: "DuzeltmeNotu",
//       sortable: true,
//     },
//     {
//       field: "Note",
//       headerName: "Note",
//       sortable: true,
//     },
//     {
//       field: "Remark",
//       headerName: "Remark",
//       sortable: true,
//     },
//     {
//       field: "Profit",
//       headerName: "Profit",
//       sortable: true,
//       hide: ![5, 11, 1007, 1005].includes(role),
//       valueGetter: params => {
//         return calculateProfit(
//           params.row.OrderTotal,
//           params.row.OrderM2,
//           params.row.ShipmentRate,
//           params.row.Fiyat
//         );
//       },
//     },
//     {
//       field: "m2SatisFiyat",
//       headerName: "m2SatisFiyat",
//       sortable: true,
//     },
//   ].filter(Boolean);
// }
//
// export function setColumnsForDelay() {
//   return [
//     {
//       field: "Id",
//       headerName: "Id",
//       valueGetter: params => params.row.Id,
//       sortable: true,
//     },
//     {
//       field: "Gerber",
//       headerName: "Gerber",
//       sortable: true,
//       renderCell: params => {
//         return (
//           <Chip
//             label={params.row.Gerber}
//             sx={{
//               color: showTextColor(params.row.DataStatus),
//               fontWeight: "500",
//               borderRadius: "5px",
//               backgroundColor: showBgColor(params.row.DataStatus),
//               width: "100%",
//             }}
//           />
//         );
//       },
//     },
//     {
//       field: "OdakCode",
//       headerName: "OdakCode",
//       sortable: true,
//     },
//     {
//       field: "CustomerCode",
//       headerName: "CustomerCode",
//       sortable: true,
//     },
//     {
//       field: "OrderNumber",
//       headerName: "OrderNumber",
//       sortable: true,
//     },
//     {
//       field: "Layers",
//       headerName: "Layers",
//       sortable: true,
//     },
//     {
//       field: "Ccl",
//       headerName: "Ccl",
//       sortable: true,
//     },
//     {
//       field: "Finishing",
//       headerName: "Finishing",
//       sortable: true,
//     },
//     {
//       field: "FactoryId",
//       headerName: "Factory",
//       sortable: true,
//       valueGetter: params => {
//         return params.row.Factory["Name"]
//           ? params.row.Factory["Name"]
//           : params.row.FactoryId;
//       },
//     },
//     {
//       field: "CustomerName",
//       headerName: "Customer Name",
//       sortable: true,
//     },
//     {
//       field: "Amount",
//       headerName: "Amount",
//       sortable: true,
//     },
//     {
//       field: "OrderM2",
//       headerName: "OrderM2",
//       sortable: true,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       sortable: true,
//     },
//     {
//       field: "ShipmentType",
//       headerName: "ShipmentType",
//       sortable: true,
//     },
//     {
//       field: "OnayTarihi",
//       headerName: "OnayTarihi",
//       sortable: true,
//     },
//     {
//       field: "ShipmentDate",
//       headerName: "ShipmentDate",
//       sortable: true,
//     },
//     {
//       field: "TahminiVaris",
//       headerName: "TahminiVaris",
//       sortable: true,
//     },
//     {
//       field: "FabrikayaGiris",
//       headerName: "FabrikayaGiris",
//       sortable: true,
//     },
//     {
//       field: "TeslimatTarihi",
//       headerName: "TeslimatTarihi",
//       sortable: true,
//     },
//   ].filter(Boolean);
// }
//
// export function setColumnsForKubra() {
//   return [
//     {
//       field: "OdakOrderNumber",
//       headerName: "OdakOrderNumber",
//       sortable: true,
//     },
//     {
//       field: "OdakCode",
//       headerName: "OdakCode",
//       sortable: true,
//     },
//     {
//       field: "FactoryId",
//       headerName: "Factory",
//       sortable: true,
//       valueGetter: params => {
//         return params.row.Factory["Name"]
//           ? params.row.Factory["Name"]
//           : params.row.FactoryId;
//       },
//     },
//     {
//       field: "CustomerName",
//       headerName: "Customer Name",
//       sortable: true,
//     },
//     {
//       field: "TeslimatTarihi",
//       headerName: "TeslimatTarihi",
//       sortable: true,
//     },
//     {
//       field: "ShipmentDate",
//       headerName: "ShipmentDate",
//       sortable: true,
//     },
//     {
//       field: "TahminiVaris",
//       headerName: "TahminiVaris",
//       sortable: true,
//     },
//     {
//       field: "FabrikayaGiris",
//       headerName: "FabrikayaGiris",
//       sortable: true,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       sortable: true,
//     },
//     {
//       field: "OrderNumber",
//       headerName: "OrderNumber",
//       sortable: true,
//     },
//     {
//       field: "ShipmentType",
//       headerName: "ShipmentType",
//       sortable: true,
//     },
//   ].filter(Boolean);
// }


// columns.js

import { createColumnConfig, addRoleBasedVisibility } from "../../utils/columnCreator";

const baseColumns = [
  createColumnConfig("Id", "Id"),
  createColumnConfig("Gerber", "Gerber"),
  createColumnConfig("OdakCode", "OdakCode"),
  createColumnConfig("OrderNumber", "OrderNumber"),
  createColumnConfig("CustomerCode", "CustomerCode"),
  createColumnConfig("OdakOrderNumber", "OdakOrderNumber"),
  createColumnConfig("TeslimatTarihi", "TeslimatTarihi"),
  createColumnConfig("ShipmentDate", "ShipmentDate"),
  createColumnConfig("ShipmentRate", "ShipmentRate"),
  createColumnConfig("ShipmentType", "ShipmentType"),
  createColumnConfig("Layers", "Layers"),
  createColumnConfig("Ccl", "Ccl"),
  createColumnConfig("CclThickness", "CclThickness"),
  createColumnConfig("CopperThickness", "CopperThickness"),
  createColumnConfig("Finishing", "Finishing"),
  createColumnConfig("LpiColorTop", "LpiColorTop"),
  createColumnConfig("LpiColorBot", "LpiColorBot"),
  createColumnConfig("LegendPrintTop", "LegendPrintTop"),
  createColumnConfig("LegendPrintBot", "LegendPrintBot"),
  createColumnConfig("SpecialPrints1", "SpecialPrints1"),
  createColumnConfig("SpecialPrints2", "SpecialPrints2"),
  createColumnConfig("SpecialProcess1", "SpecialProcess1"),
  createColumnConfig("SpecialProcess2", "SpecialProcess2"),
  createColumnConfig("SpecialProcess3", "SpecialProcess3"),
  createColumnConfig("SpecialProcess4", "SpecialProcess4"),
  createColumnConfig("SpecialProcess5", "SpecialProcess5"),
  createColumnConfig("SpecialProcess6", "SpecialProcess6"),
  createColumnConfig("PanelSizeX", "PanelSizeX"),
  createColumnConfig("PanelSizeY", "PanelSizeY"),
  createColumnConfig("PanelX", "PanelX"),
  createColumnConfig("Panelization", "Panelization"),
  createColumnConfig("PanelY", "PanelY"),
  createColumnConfig("VCutRemainingThickness", "VCutRemainingThickness"),
  createColumnConfig("VCutTolerance", "VCutTolerance"),
  createColumnConfig("Amount", "Amount"),
  createColumnConfig("OrderM2", "OrderM2"),
  createColumnConfig("OrderTotal", "OrderTotal"),
  createColumnConfig("IthalatMasraf", "IthalatMasraf"),
  createColumnConfig("TotalMaliyet", "TotalMaliyet"),
  createColumnConfig("Fiyat", "Fiyat"),
  createColumnConfig("ETest", "ETest"),
  createColumnConfig("Tooling", "Tooling"),
  createColumnConfig("OnayTarihi", "OnayTarihi"),
  createColumnConfig("FilmDurumu", "FilmDurumu"),
  createColumnConfig("Status", "Status"),
  createColumnConfig("Note", "Note"),
  createColumnConfig("FabrikayaGiris", "FabrikayaGiris"),
  createColumnConfig("Remark", "Remark"),
  createColumnConfig("TahminiVaris", "TahminiVaris"),
  createColumnConfig("Defect", "Defect"),
  createColumnConfig("RejectionRepair", "RejectionRepair"),
  createColumnConfig("DefectedQuantitiy", "DefectedQuantitiy"),
  createColumnConfig("m2", "m2"),
  createColumnConfig("CustomerName", "Customer Name"),
  createColumnConfig("FactoryId", "Factory"),
  createColumnConfig("CreatedAt", "CreatedAt"),
  createColumnConfig("CreatedBy", "CreatedBy"),
  createColumnConfig("RepeatOfGerber", "RepeatOfGerber"),
  createColumnConfig("Profit", "Profit"),
  createColumnConfig("DataStatus", "DataStatus"),
  createColumnConfig("IsSend", "IsSend"),
  createColumnConfig("ToolingAlis", "ToolingAlis"),
  createColumnConfig("m2Birim", "m2Birim"),
  createColumnConfig("m2SatisFiyat", "m2SatisFiyat"),
  createColumnConfig("DuzeltmeNotu", "DuzeltmeNotu"),
  createColumnConfig("DeletedAt", "DeletedAt"),
  createColumnConfig("DeletedBy", "DeletedBy"),
  createColumnConfig("PcbSizeX", "PcbSizeX"),
  createColumnConfig("PcbSizeY", "PcbSizeY"),
  createColumnConfig("SatisElemani", "SatisElemani"),
  createColumnConfig("EkAdet1", "EkAdet1"),
  createColumnConfig("EkAdet2", "EkAdet2"),
  createColumnConfig("EkAdet3", "EkAdet3"),
  createColumnConfig("EkAdet4", "EkAdet4"),
  createColumnConfig("EkAdet5", "EkAdet5"),
];

export function setStandartColumn(role) {
  return addRoleBasedVisibility(baseColumns, role);
}

export function setColumnsForPricing(role) {
  const pricingColumns = [
    "Id",
    "Gerber",
    "OdakCode",
    "CustomerName",
    "FactoryId",
    "OrderNumber",
    "Layers",
    "Ccl",
    "CclThickness",
    "CopperThickness",
    "Finishing",
    "LpiColorTop",
    "LpiColorBot",
    "LegendPrintTop",
    "LegendPrintBot",
    "SpecialPrints1",
    "SpecialPrints2",
    "SpecialProcess1",
    "Amount",
    "OrderM2",
    "OrderTotal",
    "TeslimatTarihi",
    "ShipmentDate",
    "ShipmentType",
    "Status",
    "DuzeltmeNotu",
    "Note",
    "Remark",
    "Profit",
    "m2SatisFiyat",
  ];

  return addRoleBasedVisibility(
    baseColumns.filter((col) => pricingColumns.includes(col.field)),
    role
  );
}

export function setColumnsForDelay(role) {
  const delayColumns = [
    "Id",
    "Gerber",
    "OdakCode",
    "CustomerCode",
    "OrderNumber",
    "Layers",
    "Ccl",
    "Finishing",
    "FactoryId",
    "CustomerName",
    "Amount",
    "OrderM2",
    "Status",
    "ShipmentType",
    "OnayTarihi",
    "ShipmentDate",
    "TahminiVaris",
    "FabrikayaGiris",
    "TeslimatTarihi",
  ];

  return addRoleBasedVisibility(
    baseColumns.filter((col) => delayColumns.includes(col.field)),
    role
  );
}

export function setColumnsForKubra(role) {
  const kubraColumns = [
    "Id",
    "Gerber",
    "OrderNumber",
    "CustomerCode",
    "OdakCode",
    "CustomerName",
    "FactoryId",
    "TeslimatTarihi",
    "Amount",
    "OrderM2",
    "OrderTotal",
    "Status",
    "FabrikayaGiris",
  ];

  return addRoleBasedVisibility(
    baseColumns.filter((col) => kubraColumns.includes(col.field)),
    role
  );
}
