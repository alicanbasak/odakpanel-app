// columnCreator.js
import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { calculateProfit } from "./calculateProfit";
import { showBgColor, showTextColor } from "../styles/tableRowColors";
import HandleChipClick from "../components/Dashboard/HandleChipClick";

export const createColumnConfig = (field, headerName, options = {}) => {
  const baseConfig = {
    field,
    headerName,
    sortable: true,
    ...options,
  };

  if (field === "Gerber") {
    baseConfig.renderCell = params => (
      <Tooltip title={params.row.RepeatOfGerber}>
        <Chip
          label={params.row.Gerber}
          sx={{
            color: showTextColor(params.row.DataStatus),
            fontWeight: "500",
            borderRadius: "5px",
            backgroundColor: showBgColor(params.row.DataStatus),
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => HandleChipClick(params.row)}
        />
      </Tooltip>
    );
  }

  if (field === "FactoryId") {
    baseConfig.valueGetter = params =>
      params.row.Factory && params.row.Factory.Name
        ? params.row.Factory.Name
        : params.row.FactoryId;
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
