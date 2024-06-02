import axiosInstance from "../config/api";

export const getFactories = async () => {
  try {
    const response = await axiosInstance.get(`/factories`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
