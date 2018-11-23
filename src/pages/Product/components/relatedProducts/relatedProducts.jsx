import React from 'react';

import { Divider } from 'antd';
import Product from '../../../../components/product/productCard';

export default ({ products }) => (
  <div id="related-products">
    <Divider />
    <h2>Productos Relacionados</h2>
    <div className="products-container">
      {products.map((p, i) => (
        <Product key={i} {...p} />
      ))}
    </div>
  </div>
);
