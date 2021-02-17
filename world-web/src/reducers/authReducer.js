import { actionTypes } from '../constants/authConstants';

const initialState = JSON.parse(localStorage.getItem('world-user')) || {
  email: null,
  auth: { auth: false, token: null }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER:
      localStorage.setItem('world-user', JSON.stringify(action.payload));
      return action.payload;
    case actionTypes.LOGIN:
      localStorage.setItem('world-user', JSON.stringify(action.payload));
      return action.payload;
    case actionTypes.LOGOUT:
      localStorage.removeItem('world-user');
      return action.payload;
    default:
      return state;
  }
}
