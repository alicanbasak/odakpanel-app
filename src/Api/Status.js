import axiosInstance from "../config/api";

export const getStatuses = async () => {
  try {
    const response = await axiosInstance.get(`/status`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
