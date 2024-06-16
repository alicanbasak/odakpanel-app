import React, { useEffect, useState } from "react";
import { getOrderList } from "../../Api/Dashboard";
import Filters from "./Filters/Filters";
import { getFactories } from "../../Api/Factories";
import { getCustomers } from "../../Api/Customers";
import { getShipmentTypes } from "../../Api/ShipmentTypes";
import { getCcls } from "../../Api/Ccl";
import { getLayers } from "../../Api/Layers";
import { getStatuses } from "../../Api/Status";
import { Box } from "@mui/material";
import ShowData from "../../components/Dashboard/ShowData";
import containerStyles from "../../styles/container";
import Uploader from "../../components/global/Uploader";
import { NotificationProvider } from "../../context/NotificationContext";
import ShowError from "../../components/global/ShowError";
import InsertButton from "../../components/global/Button";
import { setFilters } from "../../utils/setFilters";
import { handleSelectionChange } from "../../handlers/selectionHandler";

const Dashboard = () => {
  const [openInsertDialog, setOpenInsertDialog] = useState(false);
  const [error, setError] = useState(null);
  const [loadingFilterDependency, setLoadingFilterDependency] = useState(true);
  const [factories, setFactories] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [shipmentTypes, setShipmentTypes] = useState([]);
  const [ccls, setCcls] = useState([]);
  const [layers, setLayers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 0,
    pageSize: 10,
    filters: {
      factoryId: [],
      customerId: null,
      shipmentType: null,
      status: null,
      ccl: null,
      layers: null,
      search: "",
      excludeFactoryId: null,
      delay: false,
      dataWillBeSend: false,
    },
    selectedRows: [],
  });

  const filterOptions = {
    status: statuses.map(status => ({
      label: status.Status,
      value: status.Status,
    })),
    customerId: customers.map(customer => ({
      label: customer.Name,
      value: customer.Id,
    })),
    factoryId: factories.map(factory => ({
      label: factory.Name,
      value: factory.Id,
    })),
    shipmentType: shipmentTypes.map(shipmentType => ({
      label: shipmentType.ShipmentType,
      value: shipmentType.ShipmentType,
    })),
    layers: layers.map(layer => ({
      label: layer.Layers,
      value: layer.Layers,
    })),
    ccl: ccls.map(ccl => ({
      label: ccl.Ccl,
      value: ccl.Ccl,
    })),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statuses = await getStatuses();
        //get factories dynamic page and pageSize
        const factories = await getFactories({ page: 1, pageSize: 10 });
        const customers = await getCustomers({ page: 1, pageSize: 10 });
        const shipmentTypes = await getShipmentTypes();
        const ccls = await getCcls();
        const layers = await getLayers();
        setStatuses(statuses);
        setCustomers(customers["items"]);
        setFactories(factories["items"]);
        setShipmentTypes(shipmentTypes);
        setCcls(ccls);
        setLayers(layers);
        setLoadingFilterDependency(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [loadingFilterDependency]);

  useEffect(() => {
    const fetchData = async () => {
      setPageState(oldState => ({ ...oldState, isLoading: true }));
      try {
        const { items, totalCount } = await getOrderList({
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
      <InsertButton
        title="Insert Order"
        action={() => setOpenInsertDialog(true)}
      />
      <NotificationProvider>
        <Uploader
          open={openInsertDialog}
          onClose={() => setOpenInsertDialog(false)}
          title="Insert Order"
        />
      </NotificationProvider>

      <Filters
        filters={pageState.filters}
        setFilters={filters => setFilters(filters, setPageState)}
        filterOptions={filterOptions}
      />
      <ShowData
        factories={factories}
        pageState={pageState}
        setPageState={setPageState}
        selection={selection => handleSelectionChange(selection, setPageState)}
      />
    </Box>
  );
};

export default Dashboard;
