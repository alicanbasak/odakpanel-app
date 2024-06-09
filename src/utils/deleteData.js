import axiosInstance from "../config/api";

const deleteData = async endpoint => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { deleteData };
