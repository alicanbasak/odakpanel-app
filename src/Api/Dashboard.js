import { fetchData } from "../config/fetchData";

export const getOrderList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/orderList`, { page, pageSize, ...filters });
};
