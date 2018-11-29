import { createAction } from 'redux-actions';
import * as api from '../../lib/api';
import * as mutations from './mutations';

const setLoading = createAction(mutations.SET_LOADING);
const unsetLoading = createAction(mutations.UNSET_LOADING);
export const setPurchase = createAction(mutations.SET_PRODUCTS);

export const prepareSale = (products, coupon) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const response = await api.prepareSale({ products, coupon });
    console.log(response.data);
    dispatch(setPurchase(products, coupon));
  } catch (error) {
    dispatch(unsetLoading());
  }
};
