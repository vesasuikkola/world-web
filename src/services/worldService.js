import axios from 'axios';
import { API } from '../config';

const BASE_URL = `${API.api_host}:${API.api_port}/${API.world_api_path}`;
const api = axios.create({ baseURL: BASE_URL });

export const getData = async (jwt, code) => {
  const config = { headers: { authorization: jwt } };

  const worldData = code
    ? (await api.get(`/${code}`, config).catch(console.log)).data
    : (await api.get(null, config).catch(console.log)).data;

  return worldData;
};
