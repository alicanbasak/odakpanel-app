import axiosInstance from "../config/api";

const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { postData };
