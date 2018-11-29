import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getPurchaseProducts } from '../../store/getters';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import Details from './components/details/details';
import Steps from './components/steps/steps';

import './style.css';

const purchase = ({ products, loading, total, coupon }) => {
  return (
    <div id="purchase-container">
      {products.length === 0 && !loading && <Redirect to="/" />}
      <Row>
        <Col xs={24} md={16} style={{ marginBottom: 20 }}>
          <Steps products={products} loading={loading} coupon={coupon} />
        </Col>
        <Col xs={24} md={8}>
          <Details
            products={products}
            loading={loading}
            total={total}
            coupon={coupon}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ purchaseReducer }) => {
  return {
    products: purchaseReducer.products,
    loading: purchaseReducer.loading,
    total: purchaseReducer.total,
    coupon: purchaseReducer.total
  };
};

export default connect(mapStateToProps)(purchase);
