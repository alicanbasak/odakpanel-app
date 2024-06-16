import { fetchData } from "../utils/fetchData";

export const getCustomers = async ({ page, pageSize }) => {
  return await fetchData(`/customers`, {
    page,
    pageSize,
  });
};
