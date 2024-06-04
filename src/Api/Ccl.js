import { fetchData } from "../config/fetchData";

export const getCcls = async () => {
  return await fetchData(`/ccl`);
};
