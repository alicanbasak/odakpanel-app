import { fetchData } from "../config/fetchData";

export const getLayers = async () => {
  return await fetchData(`/layers`);
};
