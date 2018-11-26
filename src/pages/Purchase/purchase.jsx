import React from 'react';

import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import Details from './components/details/details';
import Steps from './components/steps/steps';

import './style.css';

const purchase = props => {
  return (
    <div id="purchase-container">
      <Row>
        <Col xs={24} md={16}>
          <Steps />
        </Col>
        <Col xs={24} md={8}>
          <Details />
        </Col>
      </Row>
    </div>
  );
};

export default purchase;
