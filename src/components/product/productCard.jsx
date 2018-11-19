import React, { useState } from 'react';

import { Card, Button, Icon } from 'antd';

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
    >
      <Price price={props.salePrice} />
      <div>
        <span className="product-name">{props.name}</span>
      </div>
      {!count ? (
        <div>
          <Button
            type="primary"
            className="product-btn"
            icon="shopping-cart"
            onClick={() => setCount(1)}
          >
            Agregar
          </Button>
        </div>
      ) : (
        <div>
          <Input value={count} onChange={setCount} />
        </div>
      )}
    </Card>
  );
};
