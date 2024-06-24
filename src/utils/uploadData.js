import axiosInstance from "../config/api";

const uploadData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { uploadData };
