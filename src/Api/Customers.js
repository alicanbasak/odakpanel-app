import { fetchData } from "../utils/fetchData";

export const getCustomers = async () => {
  return await fetchData(`/customers`);
};
