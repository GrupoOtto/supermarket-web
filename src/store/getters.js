import { maxBy, minBy, sumBy } from 'lodash';

export const getPriceRange = state => ({
  minProduct: minBy(state.productsReducer.products, p => p.salePrice) || {},
  maxProduct: maxBy(state.productsReducer.products, p => p.salePrice) || {}
});

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

export const getCartAmount = state => ({
  cartAmount: sumValues(state.cartReducer.products)
});
