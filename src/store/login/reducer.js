import * as mutations from './mutations';

const reducers = {
  [mutations.SET_TOKEN]: (state, { token }) => ({ ...state, token })
};

const defaultState = { token: null };

export default (state = defaultState, action) =>
  (reducers[action] || (f => f))(state, action);
