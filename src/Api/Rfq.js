import { fetchData } from "../utils/fetchData";
import { deleteData } from "../utils/deleteData";

export const getRfqList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/rfqs`, { page, pageSize, ...filters });
};

export const deleteRfq = async id => {
  return await deleteData(`/rfqs/${id}`);
};
