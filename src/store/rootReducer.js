import { combineReducers } from 'redux';

import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import purchaseReducer from './purchase/reducer';
import login from './login/reducer';

export default combineReducers({
  productsReducer,
  cartReducer,
  purchaseReducer,
  login
});
