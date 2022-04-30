import axios from "axios"
const baseUrl = "https://localhost:7069/api/orders/hotDogOrder"

const getAllHotDogOrders = () => new Promise((resolve, reject) => {
    axios 
        .get(`${baseUrl}`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject)
        
})

const getHotDogOrderByOrderId = (orderId) => new Promise((resolve, reject) => {
    getAllHotDogOrders()
        .then((array) => {
            const filteredArray = array.filter((hotDogOrder) => hotDogOrder.orderId === orderId);
            resolve(filteredArray);
        })
        .catch(reject);
});

export default getHotDogOrderByOrderId; 