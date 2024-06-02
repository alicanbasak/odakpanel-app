import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
} from "@mui/material";

const Filters = ({ filters, setFilters, filterOptions }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [search, setSearch] = useState(filters.search);
  const [excludeFactory, setExcludeFactory] = useState(true);
  const [orderToBeSent, setOrderToBeSent] = useState(false);
  const [delay, setDelay] = useState(false);
  const [dataWillBeSend, setDataWillBeSend] = useState(false);

  useEffect(() => {
    const updatedFilters = { ...selectedFilters };

    if (excludeFactory === true) {
      updatedFilters.excludeFactoryId = "66";
    } else {
      updatedFilters.excludeFactoryId = null;
    }

    if (orderToBeSent === true) {
      updatedFilters.orderToBeSent = "82";
    } else {
      updatedFilters.orderToBeSent = null;
    }

    if (delay === true) {
      updatedFilters.delay = true;
    } else {
      updatedFilters.delay = false;
    }

    if (dataWillBeSend === true) {
      updatedFilters.dataWillBeSend = true;
    } else {
      updatedFilters.dataWillBeSend = false;
    }

    setFilters({ ...updatedFilters, search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, excludeFactory, search]);

  const handleFilterChange = (filterName, newValues) => {
    const valueString = newValues.map(option => option.value).join(",");
    setSelectedFilters(prevSelectedFilters => ({
      ...prevSelectedFilters,
      [filterName]: valueString,
    }));
  };

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSwitchChange = () => {
    if (excludeFactory === true) {
      setExcludeFactory(false);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        excludeFactoryId: "66",
      }));
    } else {
      setExcludeFactory(true);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        excludeFactoryId: null,
      }));
    }
  };

  const orderToBeSentChange = () => {
    if (orderToBeSent === true) {
      setOrderToBeSent(false);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        orderToBeSent: "82",
      }));
    } else {
      setOrderToBeSent(true);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        orderToBeSent: null,
      }));
    }
  };

  const handleDelayChange = () => {
    if (delay === true) {
      setDelay(false);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        delay: true,
      }));
    } else {
      setDelay(true);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        delay: false,
      }));
    }
  };

  const handleDataWillBeSendChange = () => {
    if (dataWillBeSend === true) {
      setDataWillBeSend(false);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        dataWillBeSend: true,
      }));
    } else {
      setDataWillBeSend(true);
      setSelectedFilters(prevSelectedFilters => ({
        ...prevSelectedFilters,
        dataWillBeSend: false,
      }));
    }
  };

  return (
    <Box
      sx={{
        my: 2,
        backgroundColor: "white",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        py: 3,
        px: 3,
        borderRadius: 1,
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(filterOptions).map((filterName, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Autocomplete
              size="small"
              key={filterName}
              sx={{
                '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':
                  {
                    paddingRight: "65px!important",
                  },
                "& .MuiAutocomplete-tagSizeSmall": {
                  maxWidth: "calc(100% - 45px)",
                },
                ".MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
                  minWidth: "0",
                },
              }}
              options={filterOptions[filterName]}
              getOptionLabel={option => option.label}
              isOptionEqualToValue={(option, value) => option.value === value}
              onChange={(event, newValues) =>
                handleFilterChange(filterName, newValues)
              }
              name={filterName}
              limitTags={1}
              multiple
              renderInput={params => (
                <TextField
                  sx={{ width: "100%" }}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  {...params}
                  label={
                    filterName === "factoryId"
                      ? "Factory"
                      : filterName === "customerId"
                      ? "Customer"
                      : filterName === "shipmentType"
                      ? "Shipment"
                      : filterName === "status"
                      ? "Status"
                      : filterName === "ccl"
                      ? "Ccl"
                      : filterName === "layers"
                      ? "Layers"
                      : ""
                  }
                  variant="outlined"
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
      <Divider
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            id="filled-search"
            size="small"
            label="Search"
            type="search"
            variant="outlined"
            value={search}
            sx={{ width: "100%" }}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={excludeFactory}
                  onChange={handleSwitchChange}
                />
              }
              label="Except Odak"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={dataWillBeSend}
                  onChange={handleDataWillBeSendChange}
                />
              }
              label="Data will be sent"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={orderToBeSent}
                  onChange={orderToBeSentChange}
                />
              }
              label="Order to be sent"
            />
            <FormControlLabel
              control={<Switch checked={delay} onChange={handleDelayChange} />}
              label="Delays"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
