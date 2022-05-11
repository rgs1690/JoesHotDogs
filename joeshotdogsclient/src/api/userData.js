import axios from "axios";

const baseURL = "https://localhost:7069/api";

const getAllUsers = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/user`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const getUserById = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/user/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
const createUser = (newUser) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/user`, newUser)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });

export { createUser, getAllUsers, getUserById };
