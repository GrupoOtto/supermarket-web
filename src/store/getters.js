import { maxBy, minBy } from 'lodash';

export const getPriceRange = state => ({
  minProduct: minBy(state.productsReducer.products, p => p.salePrice) || {},
  maxProduct: maxBy(state.productsReducer.products, p => p.salePrice) || {}
});
