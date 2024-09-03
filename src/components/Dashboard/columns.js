// columns.js

import {
  createColumnConfig,
  addRoleBasedVisibility,
} from "../../utils/columnCreator";

const baseColumns = [
  createColumnConfig("Id", "Id", { width: 150 }),
  createColumnConfig("Gerber", "Gerber", { width: 150 }),
  createColumnConfig("OdakCode", "OdakCode", { width: 150 }),
  createColumnConfig("OrderNumber", "OrderNumber", { width: 150 }),
  createColumnConfig("CustomerCode", "CustomerCode", { width: 150 }),
  createColumnConfig("OdakOrderNumber", "OdakOrderNumber", { width: 150 }),
  createColumnConfig("TeslimatTarihi", "Teslimat Tarihi", { width: 150 }),
  createColumnConfig("ShipmentDate", "ShipmentDate", { width: 150 }),
  createColumnConfig("ShipmentRate", "ShipmentRate", { width: 150 }),
  createColumnConfig("ShipmentType", "ShipmentType", { width: 150 }),
  createColumnConfig("Layers", "Layers", { width: 150 }),
  createColumnConfig("Ccl", "Ccl", { width: 150 }),
  createColumnConfig("CclThickness", "CclThickness", { width: 150 }),
  createColumnConfig("CopperThickness", "CopperThickness", { width: 150 }),
  createColumnConfig("Finishing", "Finishing", { width: 150 }),
  createColumnConfig("LpiColorTop", "LpiColorTop", { width: 150 }),
  createColumnConfig("LpiColorBot", "LpiColorBot", { width: 150 }),
  createColumnConfig("LegendPrintTop", "LegendPrintTop", { width: 150 }),
  createColumnConfig("LegendPrintBot", "LegendPrintBot", { width: 150 }),
  createColumnConfig("SpecialPrints1", "SpecialPrints1", { width: 150 }),
  createColumnConfig("SpecialPrints2", "SpecialPrints2", { width: 150 }),
  createColumnConfig("SpecialProcess1", "SpecialProcess1", { width: 150 }),
  createColumnConfig("SpecialProcess2", "SpecialProcess2", { width: 150 }),
  createColumnConfig("SpecialProcess3", "SpecialProcess3", { width: 150 }),
  createColumnConfig("SpecialProcess4", "SpecialProcess4", { width: 150 }),
  createColumnConfig("SpecialProcess5", "SpecialProcess5", { width: 150 }),
  createColumnConfig("SpecialProcess6", "SpecialProcess6", { width: 150 }),
  createColumnConfig("PanelSizeX", "PanelSizeX", { width: 150 }),
  createColumnConfig("PanelSizeY", "PanelSizeY", { width: 150 }),
  createColumnConfig("PanelX", "PanelX", { width: 150 }),
  createColumnConfig("Panelization", "Panelization", { width: 150 }),
  createColumnConfig("PanelY", "PanelY", { width: 150 }),
  createColumnConfig("VCutRemainingThickness", "VCutRemainingThickness", {
    width: 150,
  }),
  createColumnConfig("VCutTolerance", "VCutTolerance", { width: 150 }),
  createColumnConfig("Amount", "Amount", { width: 150 }),
  createColumnConfig("OrderM2", "OrderM2", { width: 150 }),
  createColumnConfig("OrderTotal", "OrderTotal", { width: 150 }),
  createColumnConfig("IthalatMasraf", "IthalatMasraf", { width: 150 }),
  createColumnConfig("TotalMaliyet", "TotalMaliyet", { width: 150 }),
  createColumnConfig("Fiyat", "Fiyat", { width: 150 }),
  createColumnConfig("ETest", "ETest", { width: 150 }),
  createColumnConfig("Tooling", "Tooling", { width: 150 }),
  createColumnConfig("OnayTarihi", "OnayTarihi", { width: 150 }),
  createColumnConfig("FilmDurumu", "FilmDurumu", { width: 150 }),
  createColumnConfig("Status", "Status", { width: 150 }),
  createColumnConfig("Note", "Note", { width: 150 }),
  createColumnConfig("FabrikayaGiris", "FabrikayaGiris", { width: 150 }),
  createColumnConfig("Remark", "Remark", { width: 150 }),
  createColumnConfig("TahminiVaris", "TahminiVaris", { width: 150 }),
  createColumnConfig("Defect", "Defect", { width: 150 }),
  createColumnConfig("RejectionRepair", "RejectionRepair", { width: 150 }),
  createColumnConfig("DefectedQuantitiy", "DefectedQuantitiy", { width: 150 }),
  createColumnConfig("m2", "m2", { width: 150 }),
  createColumnConfig("CustomerName", "Customer Name", { width: 150 }),
  createColumnConfig("FactoryId", "Factory", { width: 150 }),
  createColumnConfig("CreatedAt", "CreatedAt", { width: 150 }),
  createColumnConfig("CreatedBy", "CreatedBy", { width: 150 }),
  createColumnConfig("RepeatOfGerber", "RepeatOfGerber", { width: 150 }),
  createColumnConfig("Profit", "Profit", { width: 150 }),
  createColumnConfig("DataStatus", "DataStatus", { width: 150 }),
  createColumnConfig("IsSend", "IsSend", { width: 150 }),
  createColumnConfig("ToolingAlis", "ToolingAlis", { width: 150 }),
  createColumnConfig("m2Birim", "m2Birim", { width: 150 }),
  createColumnConfig("m2SatisFiyat", "m2SatisFiyat", { width: 150 }),
  createColumnConfig("DuzeltmeNotu", "DuzeltmeNotu", { width: 150 }),
  createColumnConfig("DeletedAt", "DeletedAt", { width: 150 }),
  createColumnConfig("DeletedBy", "DeletedBy", { width: 150 }),
  createColumnConfig("PcbSizeX", "PcbSizeX", { width: 150 }),
  createColumnConfig("PcbSizeY", "PcbSizeY", { width: 150 }),
  createColumnConfig("SatisElemani", "SatisElemani", { width: 150 }),
  createColumnConfig("EkAdet1", "EkAdet1", { width: 150 }),
  createColumnConfig("EkAdet2", "EkAdet2", { width: 150 }),
  createColumnConfig("EkAdet3", "EkAdet3", { width: 150 }),
  createColumnConfig("EkAdet4", "EkAdet4", { width: 150 }),
  createColumnConfig("EkAdet5", "EkAdet5", { width: 150 }),
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
    baseColumns.filter(col => pricingColumns.includes(col.field)),
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
    baseColumns.filter(col => delayColumns.includes(col.field)),
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
    baseColumns.filter(col => kubraColumns.includes(col.field)),
    role
  );
}
