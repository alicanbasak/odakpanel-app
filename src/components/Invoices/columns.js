import { createColumnConfig } from "../../utils/columnCreator";

// import { setDateFromLocally } from "../../utils/setDateFromLocally";
// import { setStandartColumn } from "../../utils/setStandartColumn";

// const fields = [
//   {
//     field: "Id",
//     headerName: "Id",
//     valueGetter: params => params.row.Id,
//     sortable: true,
//   },
//   {
//     // ..factory name
//     field: "FactoryName",
//     headerName: "Factory Name",
//     sortable: true,
//     valueGetter: params => params.row.Factory.Name,
//   },
//   {
//     field: "InvoiceDate",
//     headerName: "Invoice Date",
//     sortable: true,
//     valueGetter: params => setDateFromLocally(params.row.InvoiceDate),
//   },
//   {
//     field: "InvoiceNumber",
//     headerName: "Invoice Number",
//     sortable: true,
//   },
//   {
//     field: "Price",
//     headerName: "Price",
//     sortable: true,
//     valueGetter: params => params.row.Price.toFixed(2),
//   },
//   {
//     field: "IsPaid",
//     headerName: "Is Paid",
//     sortable: true,
//     valueGetter: params => (params.row.IsPaid ? "Yes" : "No"),
//   },
//   {
//     field: "DatePaid",
//     headerName: "Date Paid",
//     sortable: true,
//     valueGetter: params =>
//       params.row.DatePaid ? setDateFromLocally(params.row.DatePaid) : "",
//   },
//   {
//     field: "ArrivalDate",
//     headerName: "Arrival Date",
//     sortable: true,
//     valueGetter: params => setDateFromLocally(params.row.ArrivalDate),
//   },
//   {
//     field: "EstimatedDate",
//     headerName: "Estimated Date",
//     sortable: true,
//     valueGetter: params => setDateFromLocally(params.row.EstimatedDate),
//   },
//   {
//     field: "TrackingNumber",
//     headerName: "Tracking Number",
//     sortable: true,
//   },
//   {
//     field: "Note",
//     headerName: "Note",
//     sortable: true,
//   },
//   {
//     field: "ShipmentType",
//     headerName: "Shipment Type",
//     sortable: true,
//   },
//   {
//     field: "Masraf",
//     headerName: "Masraf",
//     sortable: true,
//   },
// ];
// export const columns = setStandartColumn(fields);

export const baseColumns = [
  createColumnConfig("Id", "Id"),
  createColumnConfig("FactoryName", "FactoryName"),
  createColumnConfig("InvoiceDate", "Invoice Date"),
  createColumnConfig("InvoiceNumber", "Invoice Number"),
  createColumnConfig("Price", "Price"),
  createColumnConfig("IsPaid", "Is Paid"),
  createColumnConfig("DatePaid", "Date Paid"),
  createColumnConfig("ArrivalDate", "Arrival Date"),
  createColumnConfig("EstimatedDate", "Estimated Date"),
  createColumnConfig("TrackingNumber", "Tracking Number"),
  createColumnConfig("Note", "Note"),
  createColumnConfig("ShipmentType", "Shipment Type"),
  createColumnConfig("Masraf", "Masraf"),
];
