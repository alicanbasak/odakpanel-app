import axiosInstance from "./api";

const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchData };
