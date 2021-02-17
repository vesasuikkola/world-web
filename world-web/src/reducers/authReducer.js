import { actionTypes } from '../constants/authConstants';

const initialState = {
  email: null,
  auth: { auth: false, token: null }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER:
      return action.payload;
    case actionTypes.LOGIN:
      return action.payload;
    default:
      return state;
  }
}
