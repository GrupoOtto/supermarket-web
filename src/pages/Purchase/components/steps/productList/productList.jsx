import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prepareSale } from '../../../../../store/purchase/actions';

import Product from './product';
import { Divider, Input, Button, Icon } from 'antd';

const Search = Input.Search;

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
    <h3 className="title-discount">Descuento</h3>
    <Divider />
    <Search
      style={{ maxWidth: 400, marginBottom: 10 }}
      placeholder="Ingresá tu cupón"
      enterButton={loading ? <Icon type="loading" /> : 'Aplicar'}
      loading={true}
      onSearch={value => (value ? prepareSale(products, value) : null)}
    />
    <Button
      type="primary"
      className="next-btn"
      onClick={onSubmit}
      style={{ marginTop: 0 }}
    >
      Continuar
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ prepareSale }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(productList);
