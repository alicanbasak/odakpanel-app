import { fetchData } from "../utils/fetchData";

export const getFactories = async () => {
  return await fetchData(`/factories`);
};
