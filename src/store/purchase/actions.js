export const setPurchase = (products, mode) => {
  return {
    type: 'SET_PURCHASE_PRODUCT',
    products: products,
    mode
  };
};
