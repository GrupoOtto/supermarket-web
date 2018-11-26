import { omit } from 'lodash';

export default (state = { products: {} }, { type, product, amount }) => {
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: {
          ...state.products,
          [product._id]: (state.products[product._id] || 0) + amount
        }
      };
    case 'MODIFY_FROM_CART':
      return {
        ...state,
        products: { ...state.products, [product._id]: amount }
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: omit(state.products, [product._id])
      };
    default:
      return state;
  }
};
