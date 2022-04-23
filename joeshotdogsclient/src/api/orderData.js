import axios from 'axios';
import databaseConfig from './auth/apiKeys';

const baseURL = databaseConfig.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
    axios 
    .get(`${baseURL}/api/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject)
});
export default getAllOrders;

