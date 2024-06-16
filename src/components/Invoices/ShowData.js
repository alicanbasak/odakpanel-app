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
      // ..factory name
      field: "FactoryName",
      headerName: "Factory Name",
      sortable: true,
      valueGetter: params => params.row.Factory.Name,
    },
    {
      field: "InvoiceDate",
      headerName: "Invoice Date",
      sortable: true,
      valueGetter: params =>
        new Date(params.row.InvoiceDate).toLocaleDateString("tr-TR"),
    },
    {
      field: "InvoiceNumber",
      headerName: "Invoice Number",
      sortable: true,
    },
    {
      field: "Price",
      headerName: "Price",
      sortable: true,
      valueGetter: params => params.row.Price.toFixed(2),
    },
    {
      field: "IsPaid",
      headerName: "Is Paid",
      sortable: true,
      valueGetter: params => (params.row.IsPaid ? "Yes" : "No"),
    },
    {
      field: "DatePaid",
      headerName: "Date Paid",
      sortable: true,
      valueGetter: params =>
        params.row.DatePaid
          ? new Date(params.row.DatePaid).toLocaleDateString("tr-TR")
          : "",
    },
    {
      field: "ArrivalDate",
      headerName: "Arrival Date",
      sortable: true,
      valueGetter: params =>
        new Date(params.row.ArrivalDate).toLocaleDateString("tr-TR"),
    },
    {
      field: "EstimatedDate",
      headerName: "Estimated Date",
      sortable: true,
      valueGetter: params =>
        new Date(params.row.EstimatedDate).toLocaleDateString("tr-TR"),
    },
    {
      field: "TrackingNumber",
      headerName: "Tracking Number",
      sortable: true,
    },
    {
      field: "Note",
      headerName: "Note",
      sortable: true,
    },
    {
      field: "ShipmentType",
      headerName: "Shipment Type",
      sortable: true,
    },
    {
      field: "Masraf",
      headerName: "Masraf",
      sortable: true,
      // valueGetter: params => params.row.Masraf.toFixed(2),
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
