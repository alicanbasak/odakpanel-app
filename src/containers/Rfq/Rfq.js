import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRfqList } from "../../Api/Rfq";
import ShowData from "../../components/Rfq/ShowData";
import Filters from "./Filters/Filters";
const Rfq = () => {
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
  });

  const setFilters = filters => {
    setPageState(oldState => ({
      ...oldState,
      filters: { ...oldState.filters, ...filters },
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingFilterDependency(false);
    };
    fetchData();
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
        console.log(pageState.total);
      } catch (error) {
        setPageState(oldState => ({ ...oldState, isLoading: false }));
        setError(error);
      }
    };
    fetchData();
  }, [pageState.page, pageState.pageSize, pageState.filters]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box sx={{ m: 2 }}>
      <Filters filters={pageState.filters} setFilters={setFilters} />
      <ShowData pageState={pageState} setPageState={setPageState} />
    </Box>
  );
};

export default Rfq;
