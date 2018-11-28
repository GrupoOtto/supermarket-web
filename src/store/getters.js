import { maxBy, minBy, keys } from 'lodash';

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

export const getCartAmount = state => ({
  cartAmount: sumValues(state.cartReducer.products) || 0
});

export const getPriceRange = state => {
  const products = state.productsReducer.products;
  const result = {
    minProduct: minBy(products, p => p.salePrice) || {},
    maxProduct: maxBy(products, p => p.salePrice) || {}
  };
  return result;
};

export const getCartProducts = state => {
  const key = keys(state.cartReducer.products);
  return {
    products: state.productsReducer.products.filter(p =>
      key.includes(p._id.toString())
    )
  };
};

export const getPurchaseProducts = state => {
  const key = keys(state.purchaseReducer.products);
  return {
    products: state.productsReducer.products.filter(p =>
      key.includes(p._id.toString())
    )
  };
};
