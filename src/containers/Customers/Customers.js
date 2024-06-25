import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ShowData from "../../components/Customers/ShowData";
import ShowError from "../../components/global/ShowError";
import { handleSelectionChange } from "../../handlers/selectionHandler";
import { getCustomers } from "../../Api/Customers";
import containerStyles from "../../styles/container";
import { setFilters } from "../../utils/setFilters";
import Filters from "./Filters/Filters";

const Customers = () => {
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      setPageState(oldState => ({ ...oldState, isLoading: true }));
      try {
        const { items, totalCount } = await getCustomers({
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
  }, [pageState.page, pageState.pageSize, pageState.filters]);

  if (error) {
    return <ShowError error={error} />;
  }
  return (
    <Box sx={containerStyles.container}>
      <Filters
        filters={pageState.filters}
        setFilters={filters => setFilters(filters, setPageState)}
      />
      <ShowData
        pageState={pageState}
        setPageState={setPageState}
        selection={selection => handleSelectionChange(selection, setPageState)}
      />
    </Box>
  );
};

export default Customers;
