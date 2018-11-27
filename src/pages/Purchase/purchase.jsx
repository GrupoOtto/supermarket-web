import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getPurchaseProducts } from '../../store/getters';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import Details from './components/details/details';
import Steps from './components/steps/steps';

import './style.css';

const purchase = ({ products, purchase }) => {
  return (
    <div id="purchase-container">
      {products.length === 0 && <Redirect to="/" />}
      <Row>
        <Col xs={24} md={14} style={{ marginBottom: 20 }}>
          <Steps products={products} purchase={purchase} />
        </Col>
        <Col xs={24} md={10}>
          <Details products={products} purchase={purchase} />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: getPurchaseProducts(state).products,
    purchase: state.purchaseReducer.products
  };
};

export default connect(mapStateToProps)(purchase);
