import React from 'react';

import Product from '../../../../components/product/productCard';
import Default from './defaultSection';
import NoProducts from './noProducts';

export default ({ loading, products }) => (
  <div>
    <div className="products-container">
      {loading ? (
        <Default />
      ) : products.length === 0 ? (
        <NoProducts />
      ) : (
        products.map((p, i) => <Product key={i} product={p} />)
      )}
    </div>
  </div>
);
