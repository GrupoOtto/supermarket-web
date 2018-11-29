import { createAction } from 'redux-actions';
import * as api from '../../lib/api';
import { getToken } from '../login/getters';
import * as mutations from './mutations';

const updateProducts = createAction(mutations.UPDATE);
const fetchError = createAction(mutations.FETCH_ERROR);
const setLoading = createAction(mutations.SET_LOADING);
const unsetLoading = createAction(mutations.UNSET_LOADING);

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { token } = getToken(getState());
    const response = await api.productList(token);
    const products = response.data;
    dispatch(updateProducts(products));
    dispatch(unsetLoading());
  } catch (error) {
    dispatch(fetchError());
    dispatch(unsetLoading());
    return error;
  }
};
