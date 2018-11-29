import { maxBy, minBy, uniq } from 'lodash';

export const getProducts = ({ productsReducer }) => ({
  products: productsReducer.products
});
export const getLoading = ({ productsReducer }) => ({
  products: productsReducer.loading
});
export const getError = ({ productsReducer }) => ({
  products: productsReducer.error
});
export const getCategories = ({ productsReducer }) => ({
  categories: uniq(productsReducer.products.map(p => p.type.description))
});

export const getPriceRange = ({ productsReducer }) => ({
  minProduct: minBy(productsReducer.products, p => p.salePrice) || {},
  maxProduct: maxBy(productsReducer.products, p => p.salePrice) || {}
});
