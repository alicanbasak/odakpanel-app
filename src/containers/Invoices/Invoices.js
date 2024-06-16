import React, { useEffect, useState } from "react";
import ShowData from "../../components/Invoices/ShowData";
import { getInvoices } from "../../Api/Invoices";
import ShowError from "../../components/global/ShowError";
import { handleSelectionChange } from "../../handlers/selectionHandler";

const Invoices = () => {
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
        const { items, totalCount } = await getInvoices({
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
    <ShowData
      pageState={pageState}
      setPageState={setPageState}
      selection={selection => handleSelectionChange(selection, setPageState)}
    />
  );
};

export default Invoices;
