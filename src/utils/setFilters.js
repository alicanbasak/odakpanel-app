const setFilters = (filters, setState) => {
  setState(oldState => ({
    ...oldState,
    filters: { ...oldState.filters, ...filters },
  }));
};

export { setFilters };
