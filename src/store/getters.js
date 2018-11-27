import { maxBy, minBy, keys } from 'lodash';

export const getPriceRange = state => ({
  minProduct: minBy(state.productsReducer.products, p => p.salePrice) || {},
  maxProduct: maxBy(state.productsReducer.products, p => p.salePrice) || {}
});

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

export const getCartAmount = state => ({
  cartAmount: sumValues(state.cartReducer.products) || 0
});

export const getFilteredProducts = state => {
  let products = state.productsReducer.products;
  const category = state.uiReducer.category;
  const search = state.uiReducer.search.toUpperCase();

  if (category) {
    products = products.filter(p => p.type.description === category);
  }

  if (search) {
    products = products.filter(p => p.name.toUpperCase().includes(search));
  }

  return {
    products: products
  };
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
