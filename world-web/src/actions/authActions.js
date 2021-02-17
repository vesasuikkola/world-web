import { actionTypes } from '../constants/authConstants';
import * as authService from '../services/authService';

export const register = (name, email, password) => async (dispatch) => {
  const auth = await authService.register(name, email, password);
  if (auth)
    dispatch({
      type: actionTypes.REGISTER,
      payload: {
        email: email,
        auth: auth.data
      }
    });
};

export const login = (email, password) => async (dispatch) => {
  const auth = await authService.login(email, password);
  if (auth)
    dispatch({
      type: actionTypes.LOGIN,
      payload: { email: email, auth: auth.data }
    });
};
