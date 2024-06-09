const handleSelectionChange = (selection, setPageState) => {
  setPageState(oldState => ({ ...oldState, selectedRows: selection }));
};

export { handleSelectionChange };
