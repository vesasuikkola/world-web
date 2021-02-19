import { actionTypes } from '../constants/worldConstants';
import * as worldService from '../services/worldService';

export const fetchCountries = (jwt, code) => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: await worldService.getData(jwt, code) // FIXME: refactor to fetch only changed data after viewing a single country?
  });
};
