import axios from 'axios';
import { API_PATHS } from '../config.js';

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_POST || 4000;
const API = `http://${API_HOST}:${API_PORT}/${API_PATHS.analytics_db.views}`;

export const updateViews = async (code) =>
  axios.put(`${API}/${code}`).catch(console.log);
