import products from './products';

export default (
  state = { products: [], error: false, loading: true },
  action
) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: products,
        loading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
