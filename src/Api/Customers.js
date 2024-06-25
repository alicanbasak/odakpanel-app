import { fetchData } from "../utils/fetchData";

export const getCustomers = async ({ page, pageSize, filters }) => {
  return await fetchData(`/customers`, {
    page,
    pageSize,
    ...filters,
  });
};
