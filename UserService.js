import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const getUsers = () => {
  return axios.get(API_URL);
};

const createUser = (user) => {
  return axios.post(API_URL, user);
};

export default {
  getUsers,
  createUser
};
