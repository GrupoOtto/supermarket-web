import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prepareSale } from '../../../../../store/purchase/actions';
import { getPurchaseProducts } from '../../../../../store/getters';

import Product from '../productList/product';
import { Divider, Input, Button, Icon } from 'antd';

const Search = Input.Search;

const productList = ({
  products,
  purchase,
  loading,
  onSubmit,
  prepareSale
}) => {
  return (
    <div className="product-list-container">
      {products.map((p, i) => (
        <Product key={i} product={{ ...p, amount: purchase[p._id] }} />
      ))}
      <h3 className="title-discount">Descuento</h3>
      <Divider />
      <Search
        style={{ maxWidth: 400, marginBottom: 10 }}
        placeholder="Ingresá tu cupón"
        enterButton={loading ? <Icon type="loading" /> : 'Aplicar'}
        onSearch={value => (value ? prepareSale(purchase, value) : null)}
      />
      <Button
        type="primary"
        className="next-btn"
        onClick={() => {
          prepareSale(purchase);
          onSubmit();
        }}
        style={{ marginTop: 0 }}
      >
        Continuar
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: getPurchaseProducts(state).products,
    purchase: state.purchaseReducer.items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ prepareSale }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productList);
