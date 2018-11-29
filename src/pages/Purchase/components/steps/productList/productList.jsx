import React from 'react';
import { connect } from 'react-redux';

import Product from './product';
import { Button } from 'antd';

const productList = ({
  products,
  purchase,
  onSubmit,
  prepareSale,
  loading
}) => (
  <div className="product-list-container">
    {products.map((p, i) => (
      <Product key={i} product={p} />
    ))}
    <Button
      type="primary"
      className="next-btn product-list"
      onClick={onSubmit}
      style={{ marginTop: 0 }}
    >
      Continuar
    </Button>
  </div>
);

const mapStateToProps = ({ purchaseReducer }) => {
  return {
    products: purchaseReducer.products
  };
};

export default connect(mapStateToProps)(productList);
