import axiosInstance from "../config/api";

export const getShipmentTypes = async () => {
  try {
    const response = await axiosInstance.get(`/shipmentTypes`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
