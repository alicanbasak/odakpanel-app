import { fetchData } from "../utils/fetchData";

export const getStatuses = async () => {
  return await fetchData(`/status`);
};
