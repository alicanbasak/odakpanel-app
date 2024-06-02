import axiosInstance from "../config/api";

export const getCustomers = async () => {
  try {
    const response = await axiosInstance.get(`/customers`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
