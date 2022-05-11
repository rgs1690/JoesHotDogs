import axios from "axios";
const baseUrl = "https://localhost:7069/api/orders/hotDogOrder";

const getHotDogOrderByOrderId = (orderId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/${orderId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

const createHotDogOrder = (obj) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}`, obj)
      .then((response) => {
        console.log(obj);
        resolve(response.data.id);
      })
      .catch(reject);
  });

  const deleteHotDogOrder = (id, orderId) => new Promise((resolve, reject) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() => getHotDogOrderByOrderId(orderId).then(resolve))
      .catch(reject);
  });
  
export { getHotDogOrderByOrderId, createHotDogOrder, deleteHotDogOrder };
