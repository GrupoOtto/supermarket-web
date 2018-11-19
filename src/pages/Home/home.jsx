import React, { Component } from 'react';

import Product from '../../components/product/productCard';
import './style.css';

import products from './products';

class Home extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <div className="products-container">
        {products.map((p, i) => (
          <Product key={i} {...p} />
        ))}
      </div>
    );
  }
}

export default Home;
