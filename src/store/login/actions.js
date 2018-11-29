import { createAction } from 'redux-actions';
import * as api from '../../lib/api';
import * as mutations from './mutations';

import { fetchProducts } from '../products/actions';

export const setToken = createAction(mutations.SET_TOKEN);
export const logoutUser = createAction(mutations.LOGOUT);

export const logout = () => async (dispatch, getState) => {
  localStorage.removeItem('token');
  dispatch(logoutUser());
  dispatch(fetchProducts);
};

export const login = (email, password) => async (dispatch, getState) => {
  const response = await api.login(email, password);
  localStorage.setItem('token', response.data.token);
  dispatch(setToken(response.data.token));
  dispatch(fetchProducts);
};
