import React from 'react';
import { connect } from 'react-redux';

import Product from '../../../../components/product/productCard';
import Default from './defaultSection';
import Pagination from '../../../../components/pagination/pagination';

export default props => (
  <div>
    <div className="products-container">
      {props.loading ? (
        <Default />
      ) : (
        props.products.map((p, i) => <Product key={i} {...p} />)
      )}
    </div>
    <Pagination defaultCurrent={2} total={props.products.length} />
  </div>
);
