import { fetchData } from "../utils/fetchData";
import { deleteData } from "../utils/deleteData";
import { uploadData } from "../utils/uploadData";

export const getRfqList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/rfqs`, { page, pageSize, ...filters });
};

export const deleteRfq = async id => {
  return await deleteData(`/rfqs/${id}`);
};

export const uploadRfqs = async data => {
  return await uploadData(`/rfqs`, data);
};

export const getFactories = async () => {
  return await fetchData(`/factories`);
};

export const getRfq = async id => {
  return await fetchData(`/rfqs/${id}`);
};
