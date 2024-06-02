// api.js

import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get("_auth");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
