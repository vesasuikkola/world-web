import axios from 'axios';
import { API } from '../config';

const BASE_URL = `${API.api_host}:${API.api_port}`;
const api = axios.create({ baseURL: BASE_URL });

export const register = async (name, email, password) =>
  await api
    .post('/register', {
      name: name,
      email: email,
      password: password
    })
    .catch(alert);

export const login = async (email, password) =>
  await api.post('/login', { email: email, password: password }).catch(alert);
