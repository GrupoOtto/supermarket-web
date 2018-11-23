import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';

import Price from './components/price';

import './style.css';

export default props => (
  <Card
    className="product-card"
    hoverable
    cover={<img alt="product" src={props.image} />}
    actions={[
      <Link to={`/products/${props._id}`}>
        <Icon type="eye" />
      </Link>,
      <Icon type="shopping-cart" />
    ]}
  >
    <span className="product-name">{props.name}</span>
    <Price price={props.salePrice} />
  </Card>
);
