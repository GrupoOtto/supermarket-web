import React from 'react';

import { Button } from 'antd';
import Product from '../../../components/product/productItem';

import products from '../../Home/products';

export default () => (
  <div>
    {products.map((p, i) => (
      <Product key={i} {...p} />
    ))}
    <div className="card-footer">
      <h1 className="total-amount">
        Total: ${products.reduce((a, b) => a + b.salePrice, 0).toFixed(2)}
      </h1>
      <Button type="primary">Comprar Todo</Button>
    </div>
  </div>
);
