import { fetchData } from "../config/fetchData";

export const getCustomers = async () => {
  return await fetchData(`/customers`);
};
