import products from './products';

export const cartReducer = (
  state = { products: {} },
  { type, product, amount }
) => {
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: {
          ...state.products,
          [product._id]: (state.products[product._id] || 0) + amount
        }
      };
    case 'MODIFY_IN_CART':
      return {
        ...state,
        products: { ...state.products, [product._id]: amount }
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: { ...state.products, [product._id]: undefined }
      };
    default:
      return state;
  }
};

export default cartReducer;
