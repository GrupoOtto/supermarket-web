export default (state = { products: [], mode: '' }, action) => {
  switch (action.type) {
    case 'SET_PURCHASE_PRODUCT':
      return {
        ...state,
        products: action.products,
        mode: action.mode
      };
    default:
      return state;
  }
};
