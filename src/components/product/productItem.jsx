import React, { useState } from 'react';

import { Icon, Col, Row, Divider } from 'antd';

import Price from './components/price';
import Input from '../input/numberSelector';

import './style.css';

export default props => {
  return (
    <div className="product-item">
      <Row style={{ textAlign: 'center' }}>
        <Col sm={4} xs={24}>
          <img className="product-img" src={props.image} alt="product" />
        </Col>
        <Col sm={7}>
          <span className="product-name">{props.name}</span>
        </Col>
        <Col sm={8} xs={24}>
          <Input value={0} />
        </Col>
        <Col sm={4}>
          <Price price={props.salePrice} />
        </Col>
        <Col sm={1}>
          <small>
            <Icon type="cross" style={{ cursor: 'pointer' }} />
          </small>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};
