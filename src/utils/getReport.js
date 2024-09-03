import axiosInstance from "../config/api";

const getReport = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      params,
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getReport };
