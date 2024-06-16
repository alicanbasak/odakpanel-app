import { fetchData } from "../utils/fetchData";

export const getFactories = async ({ page, pageSize }) => {
  return await fetchData(`/factories`, {
    page,
    pageSize,
  });
};
