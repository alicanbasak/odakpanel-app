const inputStyles = {
  autoComplete: {
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      paddingRight: "65px!important",
    },
    "& .MuiAutocomplete-tagSizeSmall": {
      maxWidth: "calc(100% - 45px)",
    },
    ".MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      minWidth: "0",
    },
  },
  textField: {
    width: "100%",
  },
};

export default inputStyles;
