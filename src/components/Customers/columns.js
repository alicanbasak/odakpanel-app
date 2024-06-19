import { setStandartColumn } from "../../utils/setStandartColumn";
const fields = [
  {
    field: "Id",
    headerName: "Id",
    valueGetter: params => params.row.Id,
    sortable: true,
  },
  {
    field: "Name",
    headerName: "Name",
    sortable: true,
    flex: 1,
  },
];
export const columns = setStandartColumn(fields);
