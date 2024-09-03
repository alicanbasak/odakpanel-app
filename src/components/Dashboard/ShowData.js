// ShowData.js
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import DataTable from "../data/DataTable";
import Chip from "@mui/material/Chip";
import {
  setStandartColumn,
  setColumnsForPricing,
  setColumnsForDelay,
  setColumnsForKubra,
} from "./columns";

import HandleChipClick from "./HandleChipClick";

import { showBgColor, showTextColor } from "../../styles/tableRowColors";
import { Tooltip } from "@mui/material";
import HandleOrderNumberClick from "./HandleOrderNumberClick";

const ShowData = ({
  pageState,
  setPageState,
  selection,
  layout,
  role,
  renderTable,
  factories,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [orderNumberDrawerOpen, setOrderNumberDrawerOpen] = useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleChipClick = data => {
    setSelectedData(data.RelatedOrders);
    setSelectedId(data.Id); // ID'yi ayarla
    setDrawerOpen(true);
  };

  const handleOrderNumberClick = data => {
    setSelectedOrderNumber(data.OrderNumber);
    setOrderNumberDrawerOpen(true);
  };

  const closeAndRefresh = () => {
    setDrawerOpen(false);
    renderTable();
  };

  const getAllColumns = useMemo(() => {
    switch (layout) {
      case 1:
        return {
          label: "Pricing",
          columns: setColumnsForPricing(role),
        };
      case 2:
        return {
          label: "Delay",
          columns: setColumnsForDelay(),
        };
      case 3:
        return {
          label: "Kubra",
          columns: setColumnsForKubra(),
        };
      default:
        return {
          label: "Standart",
          columns: setStandartColumn(role),
        };
    }
  }, [layout, role]);

  return (
    <>
      <DataTable
        getRowId={row => row.Id}
        className="table-list"
        rows={pageState.data}
        columns={getAllColumns.columns.map(col => ({
          ...col,
          renderCell: params =>
            col.field === "Gerber" ? (
              <Tooltip title={params.row.Note ? params.row.Note : "N/A"}>
                <Chip
                  label={params.row.Gerber}
                  sx={{
                    color: showTextColor(params.row.DataStatus),
                    backgroundColor: showBgColor(params.row.DataStatus),
                    fontWeight: "500",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleChipClick(params.row)}
                />
              </Tooltip>
            ) : (
              params.value
            ),
          valueGetter: params =>
            col.field === "OrderNumber" ? (
              <Chip
                label={params.row.OrderNumber ? params.row.OrderNumber : "N/A"}
                sx={{
                  color: "#ef7757",
                  fontWeight: "500",
                  borderRadius: "5px",
                  cursor: "pointer",
                  // backgroundColor: "#f7f7f7",
                }}
                onClick={() => handleOrderNumberClick(params.row)}
              />
            ) : (
              params.value
            ),
        }))}
        role={role}
        pageState={pageState}
        setPageState={setPageState}
        onSelectionModelChange={selection}
      />
      {selectedData && (
        <HandleChipClick
          open={drawerOpen}
          onClose={closeAndRefresh}
          data={selectedData}
          parentId={selectedId}
          factories={factories}
          renderTable={renderTable}
        />
      )}
      {selectedOrderNumber && (
        <HandleOrderNumberClick
          open={orderNumberDrawerOpen}
          onClose={() => setOrderNumberDrawerOpen(false)}
          orderNumber={selectedOrderNumber}
        />
      )}
    </>
  );
};

ShowData.defaultProps = {
  role: 1,
  layout: 0,
};

ShowData.propTypes = {
  pageState: PropTypes.object.isRequired,
  setPageState: PropTypes.func.isRequired,
  selection: PropTypes.func.isRequired,
  layout: PropTypes.number,
  role: PropTypes.number,
};

export default ShowData;
