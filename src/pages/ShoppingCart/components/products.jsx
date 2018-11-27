import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPurchase } from '../../../store/purchase/actions';

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/productItem';

const productsList = ({ products, cart, setPurchase }) => (
  <div>
    {products.map((p, i) => (
      <Product key={i} product={p} cart={cart} />
    ))}
    <div className="card-footer">
      <h1 className="total-amount">
        Total: $
        {products.reduce((a, b) => a + b.salePrice * cart[b._id], 0).toFixed(2)}
      </h1>
      <Button type="primary" onClick={() => setPurchase(cart, 'cart')}>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPurchase }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productsList);
