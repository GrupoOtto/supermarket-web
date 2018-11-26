import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import Product from '../../../components/product/productItem';

const productsList = ({ products, cart }) => (
  <div>
    {products.map((p, i) => (
      <Product key={i} product={p} cart={cart} />
    ))}
    <div className="card-footer">
      <h1 className="total-amount">
        Total: $
        {products.reduce((a, b) => a + b.salePrice * cart[b._id], 0).toFixed(2)}
      </h1>
      <Button type="primary">Comprar Todo</Button>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.products
  };
};

export default connect(mapStateToProps)(productsList);
