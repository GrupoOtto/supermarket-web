export const fetchProducts = path => {
  return async (dispatch, getState) => {
    try {
      // Request Products
      console.log('hola');
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
