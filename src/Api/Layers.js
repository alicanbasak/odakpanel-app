import { fetchData } from "../utils/fetchData";

export const getLayers = async () => {
  return await fetchData(`/layers`);
};
