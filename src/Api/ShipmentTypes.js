import { fetchData } from "../utils/fetchData";

export const getShipmentTypes = async () => {
  return await fetchData(`/shipmentTypes`);
};
