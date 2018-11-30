import React from 'react';

import { connect } from 'react-redux';
import { setPurchaseItems } from '../../../store/purchase/actions';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/productItem';

const productsList = ({ products, cart, prepareSale, setPurchaseItems }) => (
  <div>
    {products.map((p, i) => (
      <Product key={i} product={p} cart={cart} />
    ))}
    <div className="card-footer">
      <h1 className="total-amount">
        Total: $
        {products.reduce((a, b) => a + b.final * cart[b._id], 0).toFixed(2)}
      </h1>
      <Button
        type="primary"
        onClick={() => setPurchaseItems({ list: cart, cart: true })}
      >
        <Link to="/checkout">Comprar Todo</Link>
      </Button>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.products
  };
};

export default connect(
  mapStateToProps,
  { setPurchaseItems }
)(productsList);
