import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 3000;

const API = `http://${API_HOST}:${API_PORT}`;

export const register = async (name, email, password) =>
  await axios
    .post(`${API}/register`, { name: name, email: email, password: password })
    .catch(alert);

export const login = async (email, password) =>
  await axios
    .post(`${API}/login`, { email: email, password: password })
    .catch(alert);
