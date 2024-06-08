import { fetchData } from "../utils/fetchData";

export const getCcls = async () => {
  return await fetchData(`/ccl`);
};
