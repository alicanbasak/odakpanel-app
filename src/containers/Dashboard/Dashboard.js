import React, { useEffect, useState } from "react";
import { getOrderList, uploadOrders } from "../../Api/Dashboard";
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
import ShowError from "../../components/global/ShowError";
import InsertButton from "../../components/global/Button";
import { setFilters } from "../../utils/setFilters";
import { handleSelectionChange } from "../../handlers/selectionHandler";
import Selecting from "../../components/global/Selecting";

const Dashboard = () => {
  const [openInsertDialog, setOpenInsertDialog] = useState(false);
  const [error, setError] = useState(null);
  const [factories, setFactories] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [shipmentTypes, setShipmentTypes] = useState([]);
  const [ccls, setCcls] = useState([]);
  const [layers, setLayers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [renderTable, setRenderTable] = useState(false);
  const [tableLayout, setTableLayout] = useState(4);
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

  const fetchFilterDependency = async () => {
    try {
      const statuses = await getStatuses();
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
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchFilterDependency();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetcing - Order List");
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
  }, [pageState.page, pageState.pageSize, pageState.filters, renderTable]);

  if (error) {
    return <ShowError error={error} />;
  }

  const handleSelectionTableLayout = selection => {
    setTableLayout(selection);
  };

  const handleRenderTable = () => {
    setRenderTable(!renderTable);
  };

  return (
    <Box sx={containerStyles.container}>
      <Box sx={containerStyles.containerHeader}>
        <InsertButton
          title="Insert Order"
          action={() => setOpenInsertDialog(true)}
        />
        <Selecting
          values={[
            { label: "Standart", value: 4 },
            { label: "Pricing", value: 1 },
            { label: "Delay", value: 2 },
            { label: "Kubra", value: 3 },
          ]}
          activeLayout={tableLayout}
          changeTable={value => handleSelectionTableLayout(value)}
        />
      </Box>

      <Uploader
        open={openInsertDialog}
        onClose={() => setOpenInsertDialog(false)}
        title="Insert Order"
        uploads={data => uploadOrders(data)}
        renderTable={() => handleRenderTable()}
      />

      <Filters
        filters={pageState.filters}
        setFilters={filters => setFilters(filters, setPageState)}
        filterOptions={filterOptions}
      />
      <ShowData
        layout={tableLayout}
        factories={factories}
        pageState={pageState}
        setPageState={setPageState}
        selection={selection => handleSelectionChange(selection, setPageState)}
      />
    </Box>
  );
};

export default Dashboard;
