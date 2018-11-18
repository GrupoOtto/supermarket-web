import React, { Component } from 'react';

import { Form, Input, Button, Card } from 'antd';
import FormItem from '../../../components/form/formItem';
import Icon from '../../../components/icon/icon';

import './style.css';

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card id="login-card">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="Email">
            {getFieldDecorator('email', {
              rules: [{ required: true }]
            })(<Input prefix={<Icon type="mail" />} placeholder="Email" />)}
          </FormItem>

          <FormItem label="Contraseña">
            {getFieldDecorator('password', {
              rules: [{ required: true }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Contraseña"
              />
            )}
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Ingresar
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(LoginForm);
