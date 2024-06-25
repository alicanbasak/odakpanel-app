import { fetchData } from "../utils/fetchData";

export const getMembers = async ({ page, pageSize, filters }) => {
  return await fetchData(`/members`, {
    page,
    pageSize,
    ...filters,
  });
};
