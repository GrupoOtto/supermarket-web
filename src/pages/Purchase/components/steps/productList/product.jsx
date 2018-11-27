import React from 'react';
import { Row, Col, Card } from 'antd';

import Price from '../../../../../components/product/components/price';

import './style.css';

export default ({ product, amount }) => (
  <Card className="product-item bordeable">
    <Row>
      <Col sm={12} md={6}>
        <img
          src={product.images[0]}
          className="product-img"
          alt={`product ${product._id}`}
        />
      </Col>
      <Col sm={6} md={6} className="product-name">
        <div>{product.name}</div>
        <small>Cantidad: {amount}</small>
      </Col>
      <Col sm={6} md={12}>
        <Price price={product.salePrice * amount} small />
      </Col>
    </Row>
  </Card>
);
