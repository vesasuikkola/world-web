import { actionTypes } from '../constants/weatherConstants';
import * as weatherService from '../services/weatherService';

export const fetchWeather = (city, jwt) => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_WEATHER,
    payload: await weatherService.getData(city, jwt)
  });
};
