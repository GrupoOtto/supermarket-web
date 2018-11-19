import React, { Component } from 'react';

import { Card } from 'antd';
import Empty from './components/empty';
import ProductList from './components/products';

import './style.css';

const products = true;

class Cart extends Component {
  render() {
    return (
      <div id="cart-container">
        <Card title={`Mi Canasta (${5})`} id="cart-card">
          {products ? <ProductList /> : <Empty />}
        </Card>
      </div>
    );
  }
}

export default Cart;
