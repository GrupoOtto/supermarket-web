import React, { useState } from 'react';

import { Card, Button } from 'antd';

import Price from './components/price';
import Input from '../input/numberSelector';

import './style.css';

export default props => {
  const [count, setCount] = useState(0);

  return (
    <Card
      className="product-card"
      hoverable
      cover={<img alt="product" src={props.image} />}
      actions={[<div>Más</div>, <div>Agregar al Carrito</div>]}
    >
      <span className="product-name">{props.name}</span>
      <Price price={props.salePrice} oldPrice={props.oldPrice} />
    </Card>
  );
};
