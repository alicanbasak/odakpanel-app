import { fetchData } from "../config/fetchData";

export const getShipmentTypes = async () => {
  return await fetchData(`/shipmentTypes`);
};
