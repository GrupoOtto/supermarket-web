import React, { useState } from 'react';

import { Card, Button, Icon } from 'antd';

import Input from '../input/numberSelector';

import './style.css';

export default props => {
  const price = props.salePrice.toString().split('.');
  const [count, setCount] = useState(0);

  return (
    <Card
      className="product-card"
      hoverable
      cover={<img alt="product" src={props.image} />}
    >
      <div className="price-section">
        <span className="price">$</span>
        <span className="price-value">{price[0]}</span>
        <span className="price-decimal">{price[1] || '00'}</span>
      </div>
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
