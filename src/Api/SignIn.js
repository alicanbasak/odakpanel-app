// api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async userData => {
  try {
    const response = await api.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
