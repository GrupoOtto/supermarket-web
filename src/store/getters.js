import { keys } from 'lodash';

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

export const getCartAmount = ({ cartReducer }) => ({
  cartAmount: sumValues(cartReducer.products) || 0
});

export const getCartProducts = ({ cartReducer, productsReducer }) => {
  return filter(cartReducer, productsReducer);
};

export const getPurchaseProducts = ({ purchaseReducer, productsReducer }) => {
  const key = keys(purchaseReducer.items);
  return {
    products: productsReducer.products.filter(p =>
      key.includes(p._id.toString())
    )
  };
};

const filter = (reducer, productsReducer) => {
  const key = keys(reducer.products);
  return {
    products: productsReducer.products.filter(p =>
      key.includes(p._id.toString())
    )
  };
};
