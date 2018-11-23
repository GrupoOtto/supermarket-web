import React, { Component } from 'react';

import { Row, Col } from 'antd';
import Filters from './components/filters';
import Product from '../../components/product/productCard';
import Pagination from '../../components/pagination/pagination';

import './style.css';
import products from './products';

class Home extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <div>
        <Row style={{ margin: '0px 10px' }}>
          <Col xl={4} lg={6} span={6}>
            <Filters />
          </Col>
          <Col xl={20} lg={18} span={6}>
            <div className="products-container">
              {products.map((p, i) => (
                <Product key={i} {...p} />
              ))}
            </div>
            <Pagination defaultCurrent={6} total={500} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
