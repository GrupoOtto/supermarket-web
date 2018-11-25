import React from 'react';
import { Card, Icon } from 'antd';

import './style.css';

export default props => (
  <Card
    loading={true}
    className="product-card"
    hoverable
    actions={[<Icon type="eye" />, <Icon type="shopping-cart" />]}
  >
    <span className="product-name">{props.name}</span>
  </Card>
);
