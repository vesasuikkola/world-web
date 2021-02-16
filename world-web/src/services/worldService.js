import axios from 'axios';
import { API_PATHS } from '../config';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 3000;

const WORLD = `http://${API_HOST}:${API_PORT}/${API_PATHS.world_db.countries}`;
const ANALYTICS = `http://${API_HOST}:${API_PORT}/${API_PATHS.analytics_db.views}`;

export const getData = async (code) => {
  const worldData = code
    ? (await axios.get(`${WORLD}/${code}`).catch(console.log)).data
    : (await axios.get(WORLD).catch(console.log)).data;

  if (!worldData.length) return worldData; // return here if we don't have a data array

  // otherwise, enrich with data from the analytics api
  const analyticsData = (await axios.get(ANALYTICS).catch(console.log)).data;

  worldData.forEach((country) => {
    const countryViews = analyticsData.find(
      (view) => view.countryCode === country.Code
    );
    country.views = countryViews ? countryViews.views : 0;
    country.lastView = countryViews ? new Date(countryViews.lastView) : null;
  });

  return worldData;
};
