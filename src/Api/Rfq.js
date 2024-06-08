import { fetchData } from "../utils/fetchData";

export const getRfqList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/rfqs`, { page, pageSize, ...filters });
};
