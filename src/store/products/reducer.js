import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const defaultState = { products: [], error: false, loading: true };

const handlers = {
  [mutations.UPDATE]: (state, products) => ({ ...state, products }),

  [mutations.SET_LOADING]: (state) => ({ ...state, loading: true }),

  [mutations.UNSET_LOADING]: (state) => ({ ...state, loading: false }),

  [mutations.FETCH_ERROR]: (state) => ({ ...state, error:true })
}

export default reducer(handlers, defaultState);
