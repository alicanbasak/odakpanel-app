import React from "react";
import DataTable from "../data/DataTable";
import { baseColumns } from "./columns";

const ShowData = ({ pageState, setPageState, selection }) => {
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
