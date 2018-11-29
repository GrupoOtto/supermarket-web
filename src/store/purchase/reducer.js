import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const handlers = {
  [mutations.SET_LOADING]: state => ({ ...state, loading: true }),

  [mutations.UNSET_LOADING]: state => ({ ...state, loading: false }),

  [mutations.SET_ITEMS]: (state, items) => ({ ...defaultState, items }),

  [mutations.SET_PRODUCTS]: (state, data) => {
    return {
      ...state,
      loading: false,
      products: data.products,
      coupon: data.coupon !== null ? data.coupon : '',
      total: data.total
    };
  }
};

const defaultState = {
  products: [],
  loading: false,
  total: 0,
  items: {},
  coupon: ''
};

export default reducer(handlers, defaultState);
