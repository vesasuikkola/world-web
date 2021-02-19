import axios from 'axios';
import { API_PATHS } from '../config';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 443;

const WORLD = `${API_HOST}:${API_PORT}/${API_PATHS.world_db.countries}`;
const ANALYTICS = `${API_HOST}:${API_PORT}/${API_PATHS.analytics_db.views}`;

export const getData = async (jwt, code) => {
  const config = { headers: { authorization: jwt } };

  const worldData = code
    ? (await axios.get(`${WORLD}/${code}`, config).catch(console.log)).data
    : (await axios.get(WORLD, config).catch(console.log)).data;

  if (!worldData.length) return worldData; // return here if we don't have a data array

  ///TODO: move this to api-gw (api composition pattern)
  // otherwise, enrich with data from the analytics api
  const data = (await axios.get(ANALYTICS, config).catch(console.log)).data;

  worldData.forEach((country) => {
    const countryViews = data.find((view) => view.countryCode === country.Code);
    country.views = countryViews ? countryViews.views : 0;
    country.lastView = countryViews ? new Date(countryViews.lastView) : null;
  });
  ///

  return worldData;
};
