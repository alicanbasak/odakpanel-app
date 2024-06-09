import { postData } from "../utils/postData";

const deleteHandler = async (
  endpoint,
  rows,
  notification,
  error,
  setPageState,
  reload
) => {
  try {
    const result = await postData(endpoint, {
      ids: rows,
    });
    if (result.statusCode === 200) {
      notification("Delete completed successfully", "success");
      reload(true);
    } else {
      error(result);
      notification("Delete completed not successfully", "error");
    }
  } catch (error) {
    error(error);
    notification("Delete completed not successfully", "error");
  } finally {
    setPageState(oldState => ({
      ...oldState,
      selectedRows: [],
    }));
  }
};

export { deleteHandler };
