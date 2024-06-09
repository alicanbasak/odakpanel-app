import React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import dataGridStyles from "../../styles/dataGrid";

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={dataGridStyles.toolbar}>
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
      sx={dataGridStyles.root}
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
