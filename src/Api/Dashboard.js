// Desc: Dashboard API
import { deleteData } from "../utils/deleteData";
import { fetchData } from "../utils/fetchData";
import { getReport } from "../utils/getReport";
import { postData } from "../utils/postData";
import { putData } from "../utils/putData";
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

export const getOrderById = async id => {
  return await fetchData(`/orderList/${id}`);
};

export const updateOrder = async (id, data) => {
  return await putData(`/orderList/${id}`, data);
};

export const getOrdersByOrderNumber = async orderNumber => {
  return await fetchData(`/orderList/orders/${orderNumber}`);
};

export const getReportOrdersByOrderNumber = async orderNumber => {
  return await getReport(`/orderList/orders/${orderNumber}/get-report`);
};

export const getLastOrderNumber = async () => {
  return await fetchData(
    `/orderList/orders/get-special-area/get-last-ordernumber`
  );
};
