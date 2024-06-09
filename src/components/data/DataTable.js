import React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const DataTable = ({
  rows,
  columns,
  pageState,
  setPageState,
  hideToolbar = false,
  onSelectionModelChange,
}) => {
  return (
    <DataGrid
      sx={{
        backgroundColor: "white",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        p: 1,
      }}
      getRowId={row => row.Id}
      autoHeight
      rows={rows}
      showCellRightBorder={true}
      rowCount={pageState.total}
      loading={pageState.isLoading}
      rowsPerPageOptions={[5, 10, 20, 50]}
      pagination
      disableSelectionOnClick
      page={pageState.page}
      pageSize={pageState.pageSize}
      paginationMode="server"
      onPageChange={newPage => {
        setPageState(old => ({ ...old, page: newPage }));
      }}
      onPageSizeChange={newPageSize =>
        setPageState(old => ({ ...old, pageSize: newPageSize }))
      }
      checkboxSelection
      columns={columns}
      components={{
        Toolbar: () => {
          if (hideToolbar) return null;
          return CustomToolbar();
        },
      }}
      onSelectionModelChange={onSelectionModelChange}
    />
  );
};

export default DataTable;
