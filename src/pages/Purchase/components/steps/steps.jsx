import React, { Component } from 'react';
import { omit, pick } from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSale } from '../../../../store/purchase/actions';
import { getUser } from '../../../../store/login/getters';

import { Card, Steps, Icon, Divider } from 'antd';

import Products from './presale/presale';
import ProductsDiscount from './productList/productList';
import Shipment from './shipment/shipmentDetails';
import Cards from './card/card';
import Result from './result/result';

import './style.css';

const Step = Steps.Step;

class StepsSection extends Component {
  state = {
    step: 0,
    details: {},
    creditCard: {},
    card: {}
  };

  getDetailsInfo = values => {
    this.setState({ details: values, step: 2 });
  };

  getData = () => ({
    user: {
      _id: this.props.user ? this.props.user.sub : null,
      email: this.state.details.email,
      name: this.state.details.name
    },
    shipment: omit(this.state.details, ['email', 'name']),
    creditCard: pick(this.state.creditCard, ['number', 'name'])
  });

  doPayment = creditCard => {
    this.setState({ creditCard });
    this.props.doSale(this.getData());
  };

  render = () => {
    const ProductList = this.props.coupon ? ProductsDiscount : Products;

    const steps = [
      {
        title: 'Tus Productos',
        element: (
          <ProductList
            onSubmit={() => this.setState({ step: 1 })}
            loading={this.props.loading}
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
      <Card
        className="container"
        loading={this.props.loading && !this.props.coupon}
      >
        <div className="steps">
          <Steps current={this.state.step}>
            <Step icon={<Icon type="shopping-cart" />} />
            <Step icon={<Icon type="solution" />} />
            <Step
              icon={
                <Icon type={this.props.paying ? 'loading' : 'credit-card'} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ doSale }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: getUser(state).user,
    paying: state.purchaseReducer.paying
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsSection);
