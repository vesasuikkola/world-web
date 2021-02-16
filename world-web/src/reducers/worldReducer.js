import { actionTypes } from '../constants/worldConstants';

const initialState = [];

export default function worldReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
