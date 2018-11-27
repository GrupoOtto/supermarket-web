import React from 'react';

import Product from './product';

export default ({ products, purchase }) => (
  <div>
    {products.map((p, i) => (
      <Product
        key={i}
        product={p}
        amount={purchase.find(x => x._id === p._id).amount}
      />
    ))}
  </div>
);
