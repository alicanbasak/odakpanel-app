import { fetchData } from "../utils/fetchData";

export const getFactories = async ({ page, pageSize, filters }) => {
  return await fetchData(`/factories`, {
    page,
    pageSize,
    ...filters,
  });
};
