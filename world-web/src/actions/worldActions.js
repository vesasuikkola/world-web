import { actionTypes } from '../constants/worldConstants';
import * as worldService from '../services/worldService';

export const fetchCountries = (code) => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: await worldService.getData(code)
  });
};
