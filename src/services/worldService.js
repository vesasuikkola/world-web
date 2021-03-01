import axios from 'axios';
import { API_PATHS } from '../config';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 443;

const WORLD = `${API_HOST}:${API_PORT}/${API_PATHS.world_db.countries}`;

export const getData = async (jwt, code) => {
  const config = { headers: { authorization: jwt } };

  const worldData = code
    ? (await axios.get(`${WORLD}/${code}`, config).catch(console.log)).data
    : (await axios.get(WORLD, config).catch(console.log)).data;

  return worldData;
};
