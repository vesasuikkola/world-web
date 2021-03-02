import { actionTypes } from '../constants/weatherConstants';

const initialState = null;

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
