import React, { useState } from "react";
import DataTable from "../data/DataTable";
import { baseColumns } from "./columns";
import { Button } from "@mui/material";

const ShowData = ({ pageState, setPageState, selection, renderTable }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [pcbCodeDrawerOpen, setPcbCodeDrawerOpen] = useState(false);
  const [selectedPcbCode, setSelectedPcbCode] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = data => {
    setSelectedId(data.Id);
    setDrawerOpen(true);
  };

  const closeAndRefresh = () => {
    setDrawerOpen(false);
    renderTable();
  };

  return (
    <DataTable
      getRowId={row => row.Id}
      className="table-list"
      rows={pageState.data}
      columns={baseColumns}
      role={1}
      pageState={pageState}
      setPageState={setPageState}
      onSelectionModelChange={selection}
    />
  );
};

export default ShowData;
