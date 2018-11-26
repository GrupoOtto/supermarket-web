import { combineReducers } from 'redux';

import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import uiReducer from './ui/reducer';

export default combineReducers({ productsReducer, cartReducer, uiReducer });
