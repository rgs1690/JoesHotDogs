import axios from 'axios';
import databaseConfig from './auth/apiKeys';

const baseURL = databaseConfig.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
    axios 
    .get(`${baseURL}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject)
});
export default getAllOrders;

