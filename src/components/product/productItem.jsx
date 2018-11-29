import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyFromCart, removeFromCart } from '../../store/cart/actions';

import { Icon, Col, Row, Card } from 'antd';
import InputNumber from '../input/inputNumber';
import Price from './components/price';
import './style.css';

const product = ({ cart, product, modifyFromCart, removeFromCart }) => {
  const amount = cart[product._id];
  return (
    <Card className="product-item bordeable">
      <Row style={{ textAlign: 'center' }}>
        <Col sm={1} className="remove-btn">
          <small onClick={() => removeFromCart(product)}>
            <Icon type="cross" style={{ cursor: 'pointer' }} />
          </small>
        </Col>
        <Col sm={4} xs={24}>
          <img className="product-img" src={product.images[0]} alt="product" />
        </Col>
        <Col sm={7} xs={24}>
          <span className="product-name">{product.name}</span>
        </Col>
        <Col sm={8} xs={24}>
          <InputNumber
            defaultValue={amount}
            onChange={value => modifyFromCart(product, value)}
          />
        </Col>
        <Col sm={4} xs={24}>
          <Price price={product.final * amount} left small />
        </Col>
      </Row>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ modifyFromCart, removeFromCart }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(product);
