import axios from 'axios';

const baseURL = "https://localhost:7069/api";

const getAllHotDogs = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseURL}/HotDogs`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

const getHotDogById = (hotdogId) => new Promise((resolve, reject) => {
    axios.get(`${baseURL}/HotDogs/${hotdogId}`)
    .then((response) => {
        resolve(response.data);
    })
    .catch(reject)
})

export { getAllHotDogs, getHotDogById };
