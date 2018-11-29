import React from 'react';
import { sumBy, keys } from 'lodash';
import { Card, Divider } from 'antd';

import './style.css';

export default ({ products, total, loading, coupon }) => {
  const subtotal = sumBy(products, p => parseInt(p.final) * parseInt(p.amount));

  const discount = 0;
  return (
    <Card className="purchase-details" loading={loading && !coupon}>
      <h3>Resumen de Compra</h3>
      <Divider />
      <div>
        <span>Productos ({sumBy(products, p => parseInt(p.amount))})</span>
        <span className="right">${subtotal}</span>
      </div>
      <div>
        <span>Descuento</span>
        <span className="right">${total - subtotal}</span>
      </div>
      <Divider />
      <div>
        <span>Total</span>
        <span className="right">${total}</span>
      </div>
    </Card>
  );
};
