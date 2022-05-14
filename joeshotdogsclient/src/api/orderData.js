import axios from "axios";
//import databaseConfig from './auth/apiKeys';

const baseURL = "https://localhost:7069/api";

const getAllOrders = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/orders`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

const getSingleOrder = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/orders/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
const getOrdersByUserId = (userId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/orders/user/${userId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const createOrder = (newOrder) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/orders`, newOrder)
      .then((response) => {
        resolve(response.data.id);
      })
      .catch(reject);
  });

const updateOrder = (orderObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/orders/${orderObj.id}`, orderObj)
      .then(() =>getOrdersByUserId(orderObj.userId).then(resolve))
    
      .catch(reject);
  });

const deleteOrder = (id, userId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/orders/${id}`)
      .then(() => getOrdersByUserId(userId).then(resolve))
      .catch(reject);
  });

export {
  getAllOrders,
  getOrdersByUserId,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
