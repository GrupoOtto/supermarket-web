import React, { Component } from 'react';

import { Card, Steps, Icon, Divider } from 'antd';

import Products from './productList/productList';
import Shipment from './shipment/shipmentDetails';
import Cards from './card/card';
import Result from './result/result';

import './style.css';

const Step = Steps.Step;

class StepsSection extends Component {
  state = {
    step: 0,
    details: {},
    card: {},
    paying: false
  };

  getDetailsInfo = values => {
    this.setState({ details: values, step: 2 });
  };

  doPayment = values => {
    this.setState({ paying: true });
    this.setState({ step: 3 });
  };

  render = () => {
    const steps = [
      {
        title: 'Tus Productos',
        element: (
          <Products
            onSubmit={() => this.setState({ step: 1 })}
            products={this.props.products}
          />
        )
      },
      {
        title: 'Datos de Envio',
        element: <Shipment onSubmit={this.getDetailsInfo} />
      },
      {
        title: 'Datos de la tarjeta',
        element: <Cards onSubmit={this.doPayment} />
      },
      {
        title: '',
        element: <Result />
      }
    ];

    return (
      <Card className="container" loading={this.props.loading}>
        <div className="steps">
          <Steps current={this.state.step}>
            <Step icon={<Icon type="shopping-cart" />} />
            <Step icon={<Icon type="solution" />} />
            <Step
              icon={
                <Icon type={this.state.paying ? 'loading' : 'credit-card'} />
              }
            />
            <Step icon={<Icon type="check" />} />
          </Steps>
          <div className="step-content" />
          <h3> {steps[this.state.step].title}</h3>
          <Divider />
          {steps[this.state.step].element}
        </div>
      </Card>
    );
  };
}

export default StepsSection;
