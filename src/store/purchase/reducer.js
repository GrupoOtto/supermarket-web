import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const handlers = {
  [mutations.SET_LOADING]: state => ({ ...state, loading: true }),

  [mutations.UNSET_LOADING]: state => ({ ...state, loading: false }),

  [mutations.SET_PRODUCTS]: (state, products, coupon) => ({
    ...state,
    products,
    loading: false,
    coupon
  })
};

const defaultState = { products: [], loading: false };

export default reducer(handlers, defaultState);
