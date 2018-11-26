import { message } from 'antd';

const pushMessage = msg => message.success(msg);

export const addToCardAndInform = (product, amount) => async dispatch => {
  pushMessage(
    amount === 1
      ? 'Se agregó un producto al carrito.'
      : `Se agregaron ${amount} productos al carrito.`
  );
  dispatch(addToCart(product, amount));
};

export const addToCart = (product, amount) => {
  return {
    type: 'ADD_TO_CART',
    product,
    amount
  };
};

export const modifyFromCart = (product, amount) => {
  return {
    type: 'MODIFY_FROM_CART',
    product,
    amount
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  };
};
