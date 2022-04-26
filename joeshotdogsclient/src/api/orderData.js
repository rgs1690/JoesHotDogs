import axios from 'axios';
//import databaseConfig from './auth/apiKeys';

const baseURL = "https://localhost:7069/api";

const getAllOrders = () => new Promise((resolve, reject) => {
    axios 
       .get(`${baseURL}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject)
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
    axios
        .get(`${baseURL}/orders/${id}`)
        .then((response) => resolve(response.data))
        .catch(reject);
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
    axios
        .post(`${baseURL}/orders`, orderObj)
        .then((response) => {
            const id = response.data.name;
            axios
                .patch(`${baseURL}/orders/${id}`, { id })
                .then(() => {
                    getAllOrders().then(resolve);
                });
        })
        .catch(reject);
});


const updateOrder = (orderObj) => new Promise((resolve, reject) => {
    axios
        .patch(`${baseURL}/orders/${orderObj.id}`, orderObj)
        .then(() => getAllOrders().then(resolve))
        .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
    axios
        .delete(`${baseURL}/orders.${id}`)
        .then(() => getAllOrders().then(resolve))
        .catch(reject);
});

export { getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder };

