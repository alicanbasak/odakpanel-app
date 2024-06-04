import { fetchData } from "../config/fetchData";

export const getStatuses = async () => {
  return await fetchData(`/status`);
};
