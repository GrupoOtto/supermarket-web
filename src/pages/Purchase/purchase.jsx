import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { keys } from 'lodash';
import { getPurchaseProducts } from '../../store/getters';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import Details from './components/details/details';
import Steps from './components/steps/steps';

import './style.css';

const purchase = ({
  products,
  loading,
  total,
  coupon,
  purchase,
  calculated
}) => (
  <div id="purchase-container">
    {keys(purchase).length === 0 && !loading && <Redirect to="/" />}
    <Row>
      <Col xs={24} md={16} style={{ marginBottom: 20 }}>
        <Steps loading={loading} coupon={coupon} />
      </Col>
      <Col xs={24} md={8}>
        <Details
          products={products}
          loading={loading}
          purchase={purchase}
          total={total}
          calculated={calculated}
          coupon={coupon}
        />
      </Col>
    </Row>
  </div>
);

const mapStateToProps = status => {
  return {
    calculated: getPurchaseProducts(status).products,
    products: status.purchaseReducer.products,
    purchase: status.purchaseReducer.items,
    loading: status.purchaseReducer.loading,
    total: status.purchaseReducer.total,
    coupon: status.purchaseReducer.coupon
  };
};

export default connect(mapStateToProps)(purchase);
