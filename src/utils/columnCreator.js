// columnCreator.js
import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { calculateProfit } from "./calculateProfit";
import { showBgColor, showTextColor } from "../styles/tableRowColors";
import HandleChipClick from "../components/Dashboard/HandleChipClick";
import HandleOrderNumberClick from "../components/Dashboard/HandleOrderNumberClick";
export const createColumnConfig = (
  field,
  headerName,
  options,
  isFlex,
  width
) => {
  const baseConfig = {
    field,
    headerName,
    flex: isFlex ? 1 : 0,
    width: width ? width : 150,
    sortable: true,
    ...options,
  };

  if (field === "OdakCode") {
    baseConfig.renderCell = params => (
      <a
        style={{
          color: "#ef7757",
          fontWeight: "500",
          cursor: "pointer",
          textDecoration: "none",
        }}
        href={`/rfqs/${params.row.Id}`}
      >
        {params.row.OdakCode}
      </a>
    );
  }

  if (field === "Profit") {
    baseConfig.valueGetter = params => {
      return calculateProfit(
        params.row.OrderTotal,
        params.row.OrderM2,
        params.row.ShipmentRate,
        params.row.Fiyat
      );
    };
  }
  if (field === "CreatedAt") {
    baseConfig.valueGetter = params => {
      return new Date(params.row.CreatedAt).toLocaleDateString("tr-TR");
    };
  }

  if (field === "CustomerName") {
    baseConfig.valueGetter = params =>
      params.row.Customer && params.row.Customer.Name
        ? params.row.Customer.Name
        : params.row.CustomerId;
  }

  if (field === "OrderNumber") {
    baseConfig.renderCell = params => (
      <Chip
        label={params.row.OrderNumber}
        sx={{
          color: "#ef7757",
          fontWeight: "500",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => HandleOrderNumberClick(params.row)}
      />
    );
  }

  if (field === "FactoryId") {
    baseConfig.valueGetter = params =>
      params.row.Factory && params.row.Factory.Name
        ? params.row.Factory.Name
        : params.row.FactoryId;
  }

  return baseConfig;
};

export const addRoleBasedVisibility = (columns, role) => {
  const roleBasedFields = [
    "OrderTotal",
    "IthalatMasraf",
    "TotalMaliyet",
    "Fiyat",
    "Tooling",
    "Profit",
  ];

  return columns.map(column => {
    if (roleBasedFields.includes(column.field)) {
      return {
        ...column,
        hide: ![5, 11, 1007, 1005].includes(role),
      };
    }
    return column;
  });
};
