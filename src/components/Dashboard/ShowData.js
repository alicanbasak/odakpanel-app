import React,{useMemo} from "react";
import {
  setStandartColumn,
  setColumnsForPricing,
  setColumnsForDelay,
  setColumnsForKubra,
} from "./columns";
import PropTypes from "prop-types";
import DataTable from "../data/DataTable";

const ShowData = ({ pageState, setPageState, selection, layout, role }) => {

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
   <DataTable
      getRowId={(row) => row.Id}
      className="table-list"
      rows={pageState.data}
      columns={getAllColumns.columns}
      role={role}
      pageState={pageState}
      setPageState={setPageState}
      onSelectionModelChange={selection}
    />
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
