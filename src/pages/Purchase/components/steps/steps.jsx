import React, { Component } from 'react';
import { omit } from 'lodash';

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
    processing: false
  };

  componentDidUpdate(prevState, state) {
    if (this.state.step === 2 && this.state.processing && !this.state.paying) {
      this.setState({ step: 3 });
    }
  }

  getDetailsInfo = values => {
    this.setState({ details: values, step: 2 });
  };

  getData = creditCard => ({
    caseId: this.props.case,
    saleInfo: {
      user: {
        _id: this.props.user ? this.props.user.sub : null,
        email: this.state.details.email,
        name: this.state.details.name
      },
      shipment: omit(this.state.details, ['email', 'name']),
      creditCard: omit(creditCard, ['expiry', 'cvc', 'focus'])
    }
  });

  doPayment = creditCard => {
    this.setState({ creditCard: creditCard, processing: true });
    this.props.doSale(this.getData(creditCard));
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
        element: <Result success={this.props.success} />
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
            <Step
              icon={
                <Icon
                  type={
                    typeof this.props.success === 'boolean' &&
                    !this.props.success
                      ? 'close'
                      : 'check'
                  }
                />
              }
            />
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
    case: state.purchaseReducer.case,
    paying: state.purchaseReducer.paying,
    success: state.purchaseReducer.success
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsSection);
