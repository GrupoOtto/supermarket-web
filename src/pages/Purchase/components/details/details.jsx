import React from 'react';
import { sumBy, keys } from 'lodash';
import { Card, Divider } from 'antd';

import './style.css';

export default ({ products, purchase }) => {
  const subtotal = sumBy(products, x => x.salePrice * purchase[x._id]);

  const discount = 0;
  return (
    <Card className="purchase-details">
      <h3>Resumen de Compra</h3>
      <Divider />
      <div>
        <span>Productos ({sumBy(keys(purchase), x => purchase[x])})</span>
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
