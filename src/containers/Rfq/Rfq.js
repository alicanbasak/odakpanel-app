import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRfqList } from "../../Api/Rfq";
import ShowData from "../../components/Rfq/ShowData";
import Filters from "./Filters/Filters";
import containerStyles from "../../styles/container";
import Uploader from "../../components/global/Uploader";
import ShowError from "../../components/global/ShowError";
import InsertButton from "../../components/global/Button";
import DeleteButton from "../../components/global/Button";
import { useNotification } from "../../context/NotificationContext";
import { deleteHandler } from "../../handlers/deleteHandler";
import { setFilters } from "../../utils/setFilters";
import buttonGroupStyles from "../../styles/buttonGroup";

const Rfq = () => {
  const { showNotification } = useNotification();
  const [openInsertDialog, setOpenInsertDialog] = useState(false);
  const [error, setError] = useState(null);
  const [loadingFilterDependency, setLoadingFilterDependency] = useState(true);
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 0,
    pageSize: 10,
    filters: {
      search: "",
    },
    selectedRows: [],
  });

  const handleSelectionChange = selection => {
    setPageState(oldState => ({ ...oldState, selectedRows: selection }));
  };

  useEffect(() => {
    setLoadingFilterDependency(false);
  }, [loadingFilterDependency]);

  useEffect(() => {
    const fetchData = async () => {
      setPageState(oldState => ({ ...oldState, isLoading: true }));
      try {
        const { items, totalCount } = await getRfqList({
          page: pageState.page + 1,
          pageSize: pageState.pageSize,
          filters: pageState.filters,
        });
        setPageState(oldState => ({
          ...oldState,
          isLoading: false,
          data: items,
          total: totalCount,
        }));
      } catch (error) {
        setPageState(oldState => ({ ...oldState, isLoading: false }));
        setError(error);
      }
    };

    fetchData();
  }, [
    pageState.page,
    pageState.pageSize,
    pageState.filters,
    loadingFilterDependency,
  ]);

  if (error) {
    return <ShowError error={error} />;
  }

  return (
    <Box sx={containerStyles.container}>
      <Box sx={buttonGroupStyles.buttonGroup}>
        <InsertButton
          title="Insert RFQ"
          action={() => setOpenInsertDialog(true)}
        />
        {pageState.selectedRows.length > 0 && (
          <DeleteButton
            title="Delete RFQ"
            action={() =>
              deleteHandler(
                "/rfqs/delete",
                pageState.selectedRows,
                showNotification,
                setError,
                setPageState,
                setLoadingFilterDependency
              )
            }
          />
        )}
      </Box>
      <Uploader
        open={openInsertDialog}
        onClose={() => setOpenInsertDialog(false)}
        title="Insert RFQ"
      />
      <Filters
        filters={pageState.filters}
        setFilters={filters => setFilters(filters, setPageState)}
      />
      <ShowData
        pageState={pageState}
        setPageState={setPageState}
        selection={handleSelectionChange}
      />
    </Box>
  );
};

export default Rfq;
