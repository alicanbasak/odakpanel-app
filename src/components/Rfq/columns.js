import { setDateFromLocally } from "../../utils/setDateFromLocally";
import { setStandartColumn } from "../../utils/setStandartColumn";

const fields = [
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
    valueGetter: params => setDateFromLocally(params.row.CreatedAt),
    flex: 2,
  },
];

export const columns = setStandartColumn(fields);
