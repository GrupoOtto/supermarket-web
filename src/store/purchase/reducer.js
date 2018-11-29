import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const handlers = {
  [mutations.SET_LOADING]: state => ({ ...state, loading: true }),

  [mutations.UNSET_LOADING]: state => ({ ...state, loading: false }),

  [mutations.SET_PRODUCTS]: (state, data) => {
    return {
      ...state,
      loading: false,
      products: data.products,
      coupon: data.coupon,
      total: data.total
    };
  }
};

const defaultState = { products: [], loading: false, total: 0 };

export default reducer(handlers, defaultState);
