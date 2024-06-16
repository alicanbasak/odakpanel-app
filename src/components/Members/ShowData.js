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
      field: "Email",
      headerName: "Email",
      sortable: true,
      flex: 1,
    },
    {
      field: "Name",
      headerName: "Name",
      sortable: true,
      flex: 1,
    },
    {
      field: "Surname",
      headerName: "Surname",
      sortable: true,
      flex: 1,
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
      onSelectionModelChange={selection}
    />
  );
};

export default ShowData;
