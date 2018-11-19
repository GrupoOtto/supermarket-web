import React from 'react';
import { Button, Icon } from 'antd';

import './style.css';

export default props => (
  <div className="number-selector">
    <Button
      type="primary"
      className="product-btn selector"
      onClick={() => props.onChange(props.value - 1)}
    >
      <Icon type="minus" />
    </Button>
    <span className="number">{props.value}</span>
    <Button
      type="primary"
      className="product-btn selector"
      onClick={() => props.onChange(props.value + 1)}
    >
      <Icon type="plus" />
    </Button>
  </div>
);
