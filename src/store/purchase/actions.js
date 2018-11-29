import { createAction } from 'redux-actions';
import { message } from 'antd';
import * as api from '../../lib/api';
import * as mutations from './mutations';

const setLoading = createAction(mutations.SET_LOADING);
const unsetLoading = createAction(mutations.UNSET_LOADING);
export const setPurchase = createAction(mutations.SET_PRODUCTS);
export const setPurchaseItems = createAction(mutations.SET_ITEMS);

export const prepareSale = (productsCart, couponCode) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setLoading());
    const token = getState().login.token;
    const response = await api.prepareSale({ productsCart, couponCode }, token);
    dispatch(setPurchase(response.data));
    if (couponCode) {
      message.success('Cupón aplicado correctamente');
    }
  } catch (error) {
    message.error(error.response.data.message);
    dispatch(unsetLoading());
  }
};
/
