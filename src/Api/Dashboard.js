// Desc: Dashboard API

import axiosInstance from "../config/api";

export const getOrderList = async ({ page, pageSize, filters }) => {
  try {
    const response = await axiosInstance.get(`/orderList`, {
      params: {
        page,
        pageSize,
        ...filters,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
