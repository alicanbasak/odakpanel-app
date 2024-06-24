// Desc: Dashboard API
import { fetchData } from "../utils/fetchData";
import { uploadData } from "../utils/uploadData";

export const getOrderList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/orderList`, { page, pageSize, ...filters });
};

export const uploadOrders = async data => {
  return await uploadData(`/orderList`, data);
};
