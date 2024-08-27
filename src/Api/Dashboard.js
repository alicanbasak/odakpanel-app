// Desc: Dashboard API
import { deleteData } from "../utils/deleteData";
import { fetchData } from "../utils/fetchData";
import { postData } from "../utils/postData";
import { uploadData } from "../utils/uploadData";

export const getOrderList = async ({ page, pageSize, filters }) => {
  return await fetchData(`/orderList`, { page, pageSize, ...filters });
};

export const uploadOrders = async data => {
  return await uploadData(`/orderList`, data);
};

export const deleteOrder = async id => {
  return await deleteData(`/orderList/${id}`);
};

export const updateGerber = async data => {
  return await postData(`/orderList/updateGerber`, data);
};
