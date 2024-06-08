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
  });

  const setFilters = filters => {
    setPageState(oldState => ({
      ...oldState,
      filters: { ...oldState.filters, ...filters },
    }));
  };

  const filterOptions = {
    status: statuses.map(status => ({
      label: status,
      value: status,
    })),
    customerId: customers.map(customer => ({
      label: customer.id.Name,
      value: customer.id.Id,
    })),
    factoryId: factories.map(factory => ({
      label: factory.id.Name,
      value: factory.id.Id,
    })),
    shipmentType: shipmentTypes.map(shipmentType => ({
      label: shipmentType.id.ShipmentType,
      value: shipmentType.id.ShipmentType.toString(),
    })),
    layers: layers.map(layer => ({
      label: layer,
      value: layer,
    })),
    ccl: ccls.map(ccl => ({
      label: ccl,
      value: ccl,
    })),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statuses = await getStatuses();
        const factories = await getFactories();
        const customers = await getCustomers();
        const shipmentTypes = await getShipmentTypes();
        const ccls = await getCcls();
        const layers = await getLayers();
        setStatuses(statuses);
        setCustomers(customers);
        setFactories(factories);
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
  }, [pageState.page, pageState.pageSize, pageState.filters]);

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
        setFilters={setFilters}
        filterOptions={filterOptions}
      />
      <ShowData
        factories={factories}
        pageState={pageState}
        setPageState={setPageState}
      />
    </Box>
  );
};

export default Dashboard;
