import React, { Component } from 'react';

import { Card, Steps, Icon, Divider } from 'antd';
import Shipment from './shipment/shipmentDetails';
import Cards from './card/card';

import './style.css';

const Step = Steps.Step;

class StepsSection extends Component {
  state = {
    step: 1,
    details: {},
    card: {},
    paying: false
  };

  getDetailsInfo = values => {
    this.setState({ details: values, step: 1 });
  };

  doPayment = values => {
    console.log('done');
    this.setState({ paying: true });
  };

  render = () => {
    const steps = [
      {
        title: 'Datos de Envio',
        element: <Shipment onSubmit={this.getDetailsInfo} />
      },
      {
        title: 'Datos de la tarjeta',
        element: <Cards onSubmit={this.doPayment} />
      }
    ];

    return (
      <Card>
        <div className="steps">
          <Steps current={this.state.step}>
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
