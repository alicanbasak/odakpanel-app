import React from "react";
import DataTable from "../data/DataTable";
import { getRole } from "../../utils/getUserCredentials";
import { calculateProfit } from "../../utils/calculateProfit";
import { Chip } from "@mui/material";

const ShowData = ({ pageState, setPageState, factories }) => {
  const role = getRole();

  const showBgColor = value => {
    if (value === 1) {
      return "#cfd8dc";
    } else if (value === 2) {
      return "#c5cae9";
    } else if (value === 3) {
      return "#ffecb3";
    } else if (value === 4) {
      return "#c8e6c9";
    } else if (value === 5) {
      return "#ffcdd2";
    } else {
      return "#cfd8dc";
    }
  };

  const showTextColor = value => {
    if (value === 1) {
      return "#607d8b";
    } else if (value === 2) {
      return "#3f51b5";
    } else if (value === 3) {
      return "#ffc107";
    } else if (value === 4) {
      return "#4caf50";
    } else if (value === 5) {
      return "#f44336";
    } else {
      return "#607d8b";
    }
  };

  const getFactoryName = factoryId => {
    const factory = factories.find(factory => factory.id.Id === factoryId);
    return factory ? factory.id.Name : "";
  };

  const columns = [
    {
      field: "Id",
      headerName: "Id",
      valueGetter: params => params.row.Id,
      sortable: true,
    },
    {
      field: "Gerber",
      headerName: "Gerber",
      sortable: true,
      renderCell: params => {
        return (
          <Chip
            label={params.row.Gerber}
            sx={{
              color: showTextColor(params.row.DataStatus),
              fontWeight: "500",
              borderRadius: "5px",
              backgroundColor: showBgColor(params.row.DataStatus),
              width: "100%",
            }}
          />
        );
      },
    },
    {
      field: "OdakCode",
      headerName: "OdakCode",
      sortable: true,
    },
    {
      field: "OrderNumber",
      headerName: "OrderNumber",
      sortable: true,
    },
    {
      field: "CustomerCode",
      headerName: "CustomerCode",
      sortable: true,
    },
    {
      field: "OdakOrderNumber",
      headerName: "OdakOrderNumber",
      sortable: true,
    },
    {
      field: "TeslimatTarihi",
      headerName: "TeslimatTarihi",
      sortable: true,
    },
    {
      field: "ShipmentDate",
      headerName: "ShipmentDate",
      sortable: true,
    },
    {
      field: "ShipmentRate",
      headerName: "ShipmentRate",
      sortable: true,
    },
    {
      field: "ShipmentType",
      headerName: "ShipmentType",
      sortable: true,
    },
    {
      field: "Layers",
      headerName: "Layers",
      sortable: true,
    },
    {
      field: "Ccl",
      headerName: "Ccl",
      sortable: true,
    },
    {
      field: "CclThickness",
      headerName: "CclThickness",
      sortable: true,
    },
    {
      field: "CopperThickness",
      headerName: "CopperThickness",
      sortable: true,
    },
    {
      field: "Finishing",
      headerName: "Finishing",
      sortable: true,
    },
    {
      field: "LpiColorTop",
      headerName: "LpiColorTop",
      sortable: true,
    },
    {
      field: "LpiColorBot",
      headerName: "LpiColorBot",
      sortable: true,
    },
    {
      field: "LegendPrintTop",
      headerName: "LegendPrintTop",
      sortable: true,
    },
    {
      field: "LegendPrintBot",
      headerName: "LegendPrintBot",
      sortable: true,
    },
    {
      field: "SpecialPrints1",
      headerName: "SpecialPrints1",
      sortable: true,
    },
    {
      field: "SpecialPrints2",
      headerName: "SpecialPrints2",
      sortable: true,
    },
    {
      field: "SpecialProcess1",
      headerName: "SpecialProcess1",
      sortable: true,
    },
    {
      field: "SpecialProcess2",
      headerName: "SpecialProcess2",
      sortable: true,
    },
    {
      field: "SpecialProcess3",
      headerName: "SpecialProcess3",
      sortable: true,
    },
    {
      field: "SpecialProcess4",
      headerName: "SpecialProcess4",
      sortable: true,
    },
    {
      field: "SpecialProcess5",
      headerName: "SpecialProcess5",
      sortable: true,
    },
    {
      field: "SpecialProcess6",
      headerName: "SpecialProcess6",
      sortable: true,
    },
    {
      field: "PanelSizeX",
      headerName: "PanelSizeX",
      sortable: true,
    },
    {
      field: "PanelSizeY",
      headerName: "PanelSizeY",
      sortable: true,
    },
    {
      field: "PanelX",
      headerName: "PanelX",
      sortable: true,
    },
    {
      field: "Panelization",
      headerName: "Panelization",
      sortable: true,
    },
    {
      field: "PanelY",
      headerName: "PanelY",
      sortable: true,
    },
    {
      field: "VCutRemainingThickness",
      headerName: "VCutRemainingThickness",
      sortable: true,
    },
    {
      field: "VCutTolerance",
      headerName: "VCutTolerance",
      sortable: true,
    },
    {
      field: "Amount",
      headerName: "Amount",
      sortable: true,
    },
    {
      field: "OrderM2",
      headerName: "OrderM2",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "OrderTotal",
      headerName: "OrderTotal",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "IthalatMasraf",
      headerName: "IthalatMasraf",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "TotalMaliyet",
      headerName: "TotalMaliyet",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "Fiyat",
      headerName: "Fiyat",
      sortable: true,
    },
    {
      field: "ETest",
      headerName: "ETest",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "Tooling",
      headerName: "Tooling",
      sortable: true,
    },
    {
      field: "OnayTarihi",
      headerName: "OnayTarihi",
      sortable: true,
    },
    {
      field: "FilmDurumu",
      headerName: "FilmDurumu",
      sortable: true,
    },
    {
      field: "Status",
      headerName: "Status",
      sortable: true,
    },
    {
      field: "Note",
      headerName: "Note",
      sortable: true,
    },
    {
      field: "FabrikayaGiris",
      headerName: "FabrikayaGiris",
      sortable: true,
    },
    {
      field: "Remark",
      headerName: "Remark",
      sortable: true,
    },
    {
      field: "TahminiVaris",
      headerName: "TahminiVaris",
      sortable: true,
    },
    {
      field: "Defect",
      headerName: "Defect",
      sortable: true,
    },
    {
      field: "RejectionRepair",
      headerName: "RejectionRepair",
      sortable: true,
    },
    {
      field: "DefectedQuantitiy",
      headerName: "DefectedQuantitiy",
      sortable: true,
    },
    {
      field: "m2",
      headerName: "m2",
      sortable: true,
    },
    {
      field: "CustomerName",
      headerName: "Customer Name",
      sortable: true,
    },
    {
      field: "FactoryId",
      headerName: "Factory",
      sortable: true,
      // List factoryId instead of factoryName
      valueGetter: params => getFactoryName(params.row.FactoryId),
    },
    {
      field: "CreatedAt",
      headerName: "CreatedAt",
      sortable: true,
    },
    {
      field: "CreatedBy",
      headerName: "CreatedBy",
      sortable: true,
    },
    {
      field: "RepeatOfGerber",
      headerName: "RepeatOfGerber",
      sortable: true,
    },
    role !== (5 || 11 || 1007 || 1005) && {
      field: "Profit",
      headerName: "Profit",
      sortable: true,
      valueGetter: params => {
        return calculateProfit(
          params.row.OrderTotal,
          params.row.OrderM2,
          params.row.ShipmentRate,
          params.row.Fiyat
        );
      },
    },
    {
      field: "DataStatus",
      headerName: "DataStatus",
      sortable: true,
    },
    {
      field: "IsSend",
      headerName: "IsSend",
      sortable: true,
    },
    {
      field: "ToolingAlis",
      headerName: "ToolingAlis",
      sortable: true,
    },
    {
      field: "m2Birim",
      headerName: "m2Birim",
      sortable: true,
    },
    {
      field: "m2SatisFiyat",
      headerName: "m2SatisFiyat",
      sortable: true,
    },
    {
      field: "DuzeltmeNotu",
      headerName: "DuzeltmeNotu",
      sortable: true,
    },
    {
      field: "DeletedAt",
      headerName: "DeletedAt",
      sortable: true,
    },
    {
      field: "DeletedBy",
      headerName: "DeletedBy",
      sortable: true,
    },
    {
      field: "PcbSizeX",
      headerName: "PcbSizeX",
      sortable: true,
    },
    {
      field: "PcbSizeY",
      headerName: "PcbSizeY",
      sortable: true,
    },
    {
      field: "SatisElemani",
      headerName: "SatisElemani",
      sortable: true,
    },
    {
      field: "EkAdet1",
      headerName: "EkAdet1",
      sortable: true,
    },
    {
      field: "EkAdet2",
      headerName: "EkAdet2",
      sortable: true,
    },
    {
      field: "EkAdet3",
      headerName: "EkAdet3",
      sortable: true,
    },
    {
      field: "EkAdet4",
      headerName: "EkAdet4",
      sortable: true,
    },
    {
      field: "EkAdet5",
      headerName: "EkAdet5",
      sortable: true,
    },
  ].filter(Boolean);

  return (
    <DataTable
      getRowId={row => row.Id}
      className="table-list"
      rows={pageState.data}
      columns={columns}
      role={1}
      pageState={pageState}
      setPageState={setPageState}
    />
  );
};

export default ShowData;
