import { fetchData } from "../config/fetchData";

export const getRfqList = async ({ page, pageSize, filters }) => {
  console.log("filters", filters);
  return await fetchData(`/rfqs`, { page, pageSize, ...filters });
};
