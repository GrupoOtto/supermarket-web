export const fetchProducts = path => {
  return async (dispatch, getState) => {
    try {
      // Request Products
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError());
      return error;
    }
  };
};

const fetchError = () => {
  return {
    type: 'FETCH_ERROR'
  };
};

const fetchSuccess = products => {
  return {
    type: 'FETCH_PRODUCTS',
    products
  };
};
