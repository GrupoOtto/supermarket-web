import React, { Component } from 'react';
import { sortedUniqBy } from 'lodash';
import { Form, Input, Select, Button } from 'antd';

import argentina from '../../../data/ciudades-argentinas';
import './style.css';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  state = {
    province: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit({ ...values, department: values.department || '' });
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    const province = getFieldValue('province');

    let cities = province
      ? argentina.find(x => x.nombre === province).ciudades
      : [];

    cities = sortedUniqBy(cities, c => c.nombre);

    return (
      <Form
        onSubmit={this.handleSubmit}
        layout="vertical"
        hideRequiredMark
        className="shipment"
      >
        <FormItem label="Nombre">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Ingrese su nombre.'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Ingrese un email valido.'
              },
              {
                required: true,
                whitespace: true,
                message: 'Ingrese su email.'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Provincia">
          {getFieldDecorator('province', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Ingrese su Provincia.'
              }
            ]
          })(
            <Select showSearch notFoundContent="No se encontraron resultados">
              {argentina.map(p => (
                <Option key={p.id} value={p['nombre']}>
                  {p['nombre']}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem label="Ciudad">
          {getFieldDecorator('city', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: ''
              }
            ]
          })(
            <Select showSearch notFoundContent="No se encontraron resultados">
              {cities.map(c => (
                <Option key={c.id} value={c['nombre']}>
                  {c['nombre']}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem label="Calle">
          {getFieldDecorator('street', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Ingrese su calle.'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Número">
          {getFieldDecorator('number', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Ingrese su número de casa.'
              }
            ]
          })(<Input type="number" />)}
        </FormItem>
        <FormItem label="Departamento (Opcional)">
          {getFieldDecorator('department', {
            rules: [
              {
                whitespace: true,
                message: 'Ingrese un valor válido.'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Teléfono">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Ingrese un teléfono.'
              }
            ]
          })(<Input style={{ width: '100%' }} />)}
        </FormItem>
        <div style={{ width: '100%' }}>
          <Button type="primary" htmlType="submit" className="next-btn">
            Continuar
          </Button>
        </div>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
