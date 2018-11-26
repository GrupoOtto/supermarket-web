import React, { Component } from 'react';

import { Card, Steps, Icon, Divider } from 'antd';
import Shipment from './shipment/shipmentDetails';
const Step = Steps.Step;

class StepsSection extends Component {
  state = {
    step: 0,
    details: {}
  };

  getDetailsInfo = values => {
    this.setState({ details: values, step: 1 });
  };

  render = () => {
    const steps = [
      {
        title: 'Datos de Envio',
        element: <Shipment onSubmit={this.getDetailsInfo} />
      },
      {
        title: 'Datos de la tarjeta',
        element: <Shipment onSubmit={this.getDetailsInfo} />
      }
    ];

    return (
      <Card>
        <div className="steps">
          <Steps>
            <Step icon={<Icon type="solution" />} />
            <Step icon={<Icon type="credit-card" />} />
            <Step icon={<Icon type="loading" />} />
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
