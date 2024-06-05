import React, { useEffect, useState } from "react";
import { Box, TextField, Grid } from "@mui/material";

const Filters = ({ filters, setFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [search, setSearch] = useState(filters.search);

  useEffect(() => {
    const updatedFilters = { ...selectedFilters };
    setFilters({ ...updatedFilters, search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
        <Grid item xs={12} sm={12} md={12}>
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
      </Grid>
    </Box>
  );
};

export default Filters;
