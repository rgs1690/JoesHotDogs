import axios from "axios";
const baseUrl = "https://localhost:7069/api/orders/hotDogOrder";

const getHotDogOrderByOrderId = (orderId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/${orderId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

export default getHotDogOrderByOrderId;
