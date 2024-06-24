import { createColumnConfig } from "../../utils/columnCreator";

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
