import React from 'react';

import { connect } from 'react-redux';
import { getCartAmount, getCartProducts } from '../../store/getters';
import { Card } from 'antd';
import Empty from './components/empty';
import ProductList from './components/products';

import './style.css';

const cart = ({ products, cartAmount }) => {
  return (
    <div id="cart-container">
      <Card title={`Mi Canasta (${cartAmount})`} id="cart-card">
        {products.length !== 0 ? (
          <ProductList products={products} />
        ) : (
          <Empty />
        )}
      </Card>
    </div>
  );
};

export default connect(getCartAmount)(connect(getCartProducts)(cart));
