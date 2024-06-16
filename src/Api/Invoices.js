import { fetchData } from "../utils/fetchData";

export const getInvoices = async ({ page, pageSize, filters }) => {
  return await fetchData(`/invoices`, { page, pageSize, ...filters });
};
