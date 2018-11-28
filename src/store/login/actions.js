import { createAction } from 'redux-actions';
import * as api from '../../lib/api';
import * as mutations from './mutations';

export const setToken = createAction(mutations.SET_TOKEN);
export const logout = createAction(mutations.LOGOUT);

export const login = (email, password) => async (dispatch, getState) => {
  const response = await api.login(email, password);
  dispatch(setToken(response.data.token));
};
