import axiosInstance from "../config/api";

export const getLayers = async () => {
  try {
    const response = await axiosInstance.get(`/layers`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
