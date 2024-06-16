import { fetchData } from "../utils/fetchData";

export const getMembers = async ({ page, pageSize }) => {
  return await fetchData(`/members`, {
    page,
    pageSize,
  });
};
