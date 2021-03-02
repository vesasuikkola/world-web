import axios from 'axios';
import { API } from '../config';

const BASE_URL = `${API.api_host}:${API.api_port}/${API.weather_api_path}`;
const api = axios.create({ baseURL: BASE_URL });

export const getWeather = async (jwt, city) => {
  const config = { headers: { authorization: jwt } };

  const { data } = await api.get(`/${city}`, config);
  return data;
};
