import { maxBy, minBy, sumBy } from 'lodash';

export const getPriceRange = state => ({
  minProduct: minBy(state.productsReducer.products, p => p.salePrice) || {},
  maxProduct: maxBy(state.productsReducer.products, p => p.salePrice) || {}
});

export const getCartAmount = state => ({
  cartAmount: sumBy(state.cartReducer.products, p => p.amount)
});
