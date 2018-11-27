import * as mutations from './mutations';

const reducers = {
  [mutations.SET_TOKEN]: (state, token) => ({ ...state, token }),
  [mutations.LOGOUT]: state => ({ ...state, token: null })
};

const defaultState = { token: null };

export default (state = defaultState, action) =>
  (reducers[action.type] || (f => f))(state, action.payload);
