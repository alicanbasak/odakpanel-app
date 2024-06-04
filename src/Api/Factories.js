import { fetchData } from "../config/fetchData";

export const getFactories = async () => {
  return await fetchData(`/factories`);
};
