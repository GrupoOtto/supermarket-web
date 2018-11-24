import React from 'react';

import { Icon, Col, Row, Divider } from 'antd';
import InputNumber from '../input/inputNumber';
import Price from './components/price';
import './style.css';

export default props => {
  return (
    <div className="product-item">
      <Row style={{ textAlign: 'center' }}>
        <Col sm={1} className="remove-btn">
          <small>
            <Icon type="cross" style={{ cursor: 'pointer' }} />
          </small>
        </Col>
        <Col sm={4} xs={24}>
          <img className="product-img" src={props.image} alt="product" />
        </Col>
        <Col sm={7} xs={24}>
          <span className="product-name">{props.name}</span>
        </Col>
        <Col sm={8} xs={24}>
          <InputNumber />
        </Col>
        <Col sm={4} xs={24}>
          <Price price={props.salePrice} left />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};
