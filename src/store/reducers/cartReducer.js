import products from './products';
import { message } from 'antd';

export const cartReducer = (
  state = { products: {} },
  { type, product, amount }
) => {
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: {
          ...state,
          [product.id]: (state.products[product.id] || 0) + amount
        }
      };
    case 'MODIFY_IN_CART':
      products = state.products.filter(x => x._id !== product._id);
      return {
        ...state,
        products: [...products, { ...product, amount: amount }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.filter(x => x._id !== product.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
