import React from 'react';
import { sumBy, keys } from 'lodash';
import { Card, Divider } from 'antd';

import './style.css';

export default ({ products, loading }) => {
  const subtotal = sumBy(products, x => x.final);

  const discount = 0;
  return (
    <Card className="purchase-details" loading={loading}>
      <h3>Resumen de Compra</h3>
      <Divider />
      <div>
        <span>Productos (0)</span>
        <span className="right">${subtotal}</span>
      </div>
      <div>
        <span>Descuento</span>
        <span className="right">${discount}</span>
      </div>
      <Divider />
      <div>
        <span>Total</span>
        <span className="right">${subtotal - discount}</span>
      </div>
    </Card>
  );
};
