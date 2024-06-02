import axiosInstance from "../config/api";

export const getCcls = async () => {
  try {
    const response = await axiosInstance.get(`/ccl`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
