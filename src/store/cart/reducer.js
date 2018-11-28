import { omit } from 'lodash';

export default (state = defaultState, { type, product, amount }) => {
  let products;
  switch (type) {
    case 'ADD_TO_CART':
      products = {
        ...state.products,
        [product._id]: (state.products[product._id] || 0) + amount
      };
      break;
    case 'MODIFY_FROM_CART':
      products = { ...state.products, [product._id]: amount };
      break;
    case 'REMOVE_FROM_CART':
      products = omit(state.products, [product._id]);
      break;
    default:
      products = state.products;
      break;
  }
  localStorage.setItem('cart', JSON.stringify(products));
  return { ...state, products };
};

const defaultState = {
  products: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : {}
};
