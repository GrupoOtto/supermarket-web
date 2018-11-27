import React, { Component } from 'react';

import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux';

import Card from '../../../components/card/card';
import FormItem from '../../../components/form/formItem';
import Icon from '../../../components/icon/icon';
import { login } from '../../../store/login/actions';
import history from '../../../history';

import './style.css';

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, { email, password }) => {
      if (!err) {
        try {
          await this.props.login(email, password);
          // push home route
          history.push('/');
          message.success('Loggin successful');
        } catch (error) {
          message.error('Login error');
        }
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

const mapStateToProps = null;
const mapDispatchToProps = { login };

export default Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
