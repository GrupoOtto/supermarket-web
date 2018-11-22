import React, { Component } from 'react';

import { Row, Col } from 'antd';
import Filters from './components/filters';
import Product from '../../components/product/productCard';

import './style.css';
import products from './products';

class Home extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <Row>
        <Col md={4}>
          <Filters />
        </Col>
        <Col md={17} className="products-container">
          {products.map((p, i) => (
            <Product key={i} {...p} />
          ))}
        </Col>
      </Row>
    );
  }
}

export default Home;
