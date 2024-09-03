import { createColumnConfig } from "../../utils/columnCreator";

export const baseColumns = [
  createColumnConfig("Id", "Id", {
    flex: 1,
  }),
  createColumnConfig("OdakCode", "PCB Code", {
    flex: 1,
  }),
  createColumnConfig("CustomerName", "Customer", {
    flex: 1,
  }),
  createColumnConfig("CustomerCode", "Customer Code", {
    flex: 1,
  }),
  createColumnConfig("SatisElemani", "Customer Representative", {
    flex: 1,
  }),
  createColumnConfig("CreatedAt", "Rfq Date", {
    flex: 1,
  }),
];
