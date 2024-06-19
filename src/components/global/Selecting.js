import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import inputStyles from "../../styles/inputs";

const Selecting = ({ values, activeLayout, changeTable }) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Select Layout</InputLabel>
      <Select
        sx={inputStyles.select}
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeLayout}
        label="Select Layout"
        onChange={e => changeTable(e.target.value)}
      >
        {values.map((value, index) => (
          <MenuItem key={index} value={value.value}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selecting;
