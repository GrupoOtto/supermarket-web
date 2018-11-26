import React, { Component } from 'react';

import { Input, Form, Button, Row } from 'antd';

import Col from '../../../../../components/grid/col';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import './style.css';

class CardSection extends Component {
  state = { number: '', name: '', expiry: '', cvc: '', focus: '' };

  submit = () => {
    const { number, name, expiry, cvc } = this.state;

    if (
      this.validateLength(number, 16) &&
      name > 0 &&
      this.validateLength(expiry, 4) &&
      this.validateLength(cvc, 4)
    ) {
      this.props.onSubmit(this.state);
    }
    console.log(this.state);
  };

  validateLength(value, length) {
    return value.toString().length === length;
  }

  setFocus = name => this.setState({ focus: name });

  setNumber = number => {
    const reg = new RegExp('^[0-9]+$');
    if ((!reg.test(number) && number !== '') || number.toString().length > 16) {
      return;
    }
    this.setState({ number });
  };

  setName = name => {
    this.setState({ name });
  };

  setExpiry = expiry => {
    const string = expiry.toString();
    if (string.length > 4) {
      return;
    }
    if (parseInt(string.substring(0, 2)) > 12) {
      return;
    }

    this.setState({ expiry });
  };

  setCVC = cvc => {
    if (cvc.toString().length > 4) {
      return;
    }

    this.setState({ cvc });
  };

  render = () => {
    return (
      <div>
        <Row gutter={48}>
          <Col xs={24} md={10}>
            <Cards
              number={this.state.number}
              name={this.state.name}
              expiry={this.state.expiry}
              cvc={this.state.cvc}
              focused={this.state.focus}
              placeholders={{ name: 'Tu Nombre Aquí' }}
            />
          </Col>
          <Col xs={24} md={14}>
            <Form>
              <Form.Item label="Número" colon={false} className="full-length">
                <Input
                  onFocus={() => this.setFocus('number')}
                  onChange={e => this.setNumber(e.target.value)}
                  value={this.state.number}
                  type="number"
                  name="number"
                />
              </Form.Item>
              <Form.Item label="Nombre" colon={false} className="full-length">
                <Input
                  value={this.state.name}
                  onFocus={() => this.setFocus('name')}
                  onChange={e => this.setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Fecha de Expiración" colon={false}>
                <Input
                  value={this.state.expiry}
                  onFocus={() => this.setFocus('expiry')}
                  type="number"
                  onChange={e => this.setExpiry(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="CVC" colon={false}>
                <Input
                  value={this.state.cvc}
                  onFocus={() => this.setFocus('cvc')}
                  type="number"
                  onChange={e => this.setCVC(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Button type="primary" className="next-btn" onClick={this.submit}>
          Realizar Pago
        </Button>
      </div>
    );
  };
}

export default CardSection;
