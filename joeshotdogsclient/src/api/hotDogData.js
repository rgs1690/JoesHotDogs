import axios from 'axios';

const baseURL = "https://localhost:7069/api";

const getAllHotDogs = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseURL}/hotDogs`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

export default getAllHotDogs;