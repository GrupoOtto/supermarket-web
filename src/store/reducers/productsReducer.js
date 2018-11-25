export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default productsReducer;
