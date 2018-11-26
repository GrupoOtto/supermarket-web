import React from 'react';

import Product from '../../../../components/product/productCard';
import Default from './defaultSection';
import Pagination from '../../../../components/pagination/pagination';

export default props => (
  <div>
    <div className="products-container">
      {props.loading ? (
        <Default />
      ) : (
        props.products.map((p, i) => <Product key={i} product={p} />)
      )}
    </div>
    <Pagination defaultCurrent={2} total={props.products.length} />
  </div>
);
