import axios from "axios";

const API_URL = "http://localhost:3000/api"

export const getOrders = async () => {
  const response = await axios.get(API_URL + "/orders");
  return response;
};

export const getPickers = async () => {
  const response = await axios.get(API_URL + "/pickers");
  return response.data;
};

export const orderStatus = async (orderId, status) => {
  const response = await axios.patch(API_URL + `/orders/${orderId}/${status}`);
  return response.data;
};

export const addPicker = async (name, surname) => {
  const response = await axios.post(API_URL + "/pickers", { name, surname });
  return response.data;
};
