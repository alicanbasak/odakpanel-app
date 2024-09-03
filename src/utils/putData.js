import axiosInstance from "../config/api";

const putData = async (endpoint, id, data) => {
  try {
    const response = await axiosInstance.put(endpoint, id, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { putData };
