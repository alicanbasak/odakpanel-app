import { createColumnConfig } from "../../utils/columnCreator";

export const baseColumns = [
  createColumnConfig("Id", "Id"),
  createColumnConfig("OdakCode", "PCB Code"),
  createColumnConfig("CustomerName", "Customer"),
  createColumnConfig("CustomerCode", "Customer Code"),
  createColumnConfig("SatisElemani", "Customer Representative"),
  createColumnConfig("CreatedAt", "Rfq Date"),
];
