import React from "react";
import DataTable from "../data/DataTable";
const ShowData = ({ pageState, setPageState, selection }) => {
  const columns = [
    {
      field: "Id",
      headerName: "Id",
      valueGetter: params => params.row.Id,
      sortable: true,
    },
    {
      field: "OdakCode",
      headerName: "PCB Code",
      valueGetter: params => params.row.OdakCode,
      sortable: true,
      flex: 2,
    },
    {
      field: "CustomerName",
      headerName: "Customer",
      valueGetter: params => params.row.CustomerName,
      sortable: true,
      flex: 2,
    },
    {
      field: "CustomerCode",
      headerName: "Customer Code",
      valueGetter: params => params.row.CustomerCode,
      sortable: true,
      flex: 2,
    },
    {
      field: "SatisElemani",
      headerName: "Customer Representative",
      valueGetter: params => params.row.SatisElemani,
      sortable: true,
      flex: 2,
    },
    {
      field: "CreatedAt",
      headerName: "Rfq Date",
      valueGetter: params =>
        new Date(params.row.CreatedAt).toLocaleDateString("tr-TR"),
      flex: 2,
    },
  ];

  return (
    <DataTable
      getRowId={row => row.Id}
      className="table-list"
      rows={pageState.data}
      columns={columns}
      role={1}
      pageState={pageState}
      setPageState={setPageState}
      onSelectionModelChange={selection}
    />
  );
};

export default ShowData;
