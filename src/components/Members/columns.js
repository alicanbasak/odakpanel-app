// import { setStandartColumn } from "../../utils/setStandartColumn";
// const fields = [
//   {
//     field: "Id",
//     headerName: "Id",
//     valueGetter: params => params.row.Id,
//     sortable: true,
//   },
//   {
//     field: "Email",
//     headerName: "Email",
//     sortable: true,
//     flex: 1,
//   },
//   {
//     field: "Name",
//     headerName: "Name",
//     sortable: true,
//     flex: 1,
//   },
//   {
//     field: "Surname",
//     headerName: "Surname",
//     sortable: true,
//     flex: 1,
//   },
// ];
// export const columns = setStandartColumn(fields);

import { createColumnConfig } from "../../utils/columnCreator";

export const baseColumns = [
  createColumnConfig("Id", "Id"),
  createColumnConfig("Email", "Email"),
  createColumnConfig("Name", "Name"),
  createColumnConfig("Surname", "Surname"),
];
