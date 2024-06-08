// Desc: Dashboard API
import { fetchData } from "../utils/fetchData";

export const getOrderList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/orderList`, { page, pageSize, ...filters });
};
