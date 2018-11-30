import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const handlers = {
  [mutations.SET_LOADING]: state => ({ ...state, loading: true }),

  [mutations.UNSET_LOADING]: state => ({ ...state, loading: false }),

  [mutations.SET_PAYING]: state => ({ ...state, paying: true }),

  [mutations.SET_ITEMS]: (state, data) => ({
    ...defaultState,
    items: data.list,
    cart: data.cart
  }),

  [mutations.SET_SUCCESS]: state => ({
    ...state,
    success: true,
    paying: false
  }),

  [mutations.SET_FAIL]: (state, items) => ({
    ...state,
    success: false,
    paying: false
  }),

  [mutations.SET_PRODUCTS]: (state, data) => {
    return {
      ...state,
      loading: false,
      products: data.list.products,
      coupon: data.list.coupon !== null ? data.list.coupon : '',
      total: data.list.total,
      case: data.caseId
    };
  }
};

const defaultState = {
  products: [],
  cart: false,
  loading: false,
  paying: false,
  total: 0,
  items: {},
  coupon: ''
};

export default reducer(handlers, defaultState);
