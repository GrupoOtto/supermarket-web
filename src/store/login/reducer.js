import reducer from '../../utils/reducer';
import * as mutations from './mutations';

const handlers = {
  [mutations.SET_TOKEN]: (state, token) => ({ ...state, token }),
  [mutations.LOGOUT]: state => ({ ...state, token: null })
};

const defaultState = { token: null };

export default reducer(handlers, defaultState);
