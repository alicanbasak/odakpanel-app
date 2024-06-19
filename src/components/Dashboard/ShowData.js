import React from "react";
import {
  setStandartColumn,
  setColumnsForPricing,
  setColumnsForDelay,
  setColumnsForKubra,
} from "./columns";

import DataTable from "../data/DataTable";

const ShowData = ({ pageState, setPageState, selection, layout }) => {
  const getAllColumns = () => {
    switch (layout) {
      case 1:
        return {
          label: "Pricing",
          columns: setColumnsForPricing(),
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
          columns: setStandartColumn(),
        };
    }
  };

  return (
    <DataTable
      getRowId={row => row.Id}
      className="table-list"
      rows={pageState.data}
      columns={getAllColumns().columns}
      role={1}
      pageState={pageState}
      setPageState={setPageState}
      onSelectionModelChange={selection}
    />
  );
};

export default ShowData;
