import axios from 'axios';
//import databaseConfig from './auth/apiKeys';

const baseURL = "https://localhost:7069/api";

const getAllOrders = () => new Promise((resolve, reject) => {
    axios 
       .get(`${baseURL}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject)
});
export default getAllOrders;

