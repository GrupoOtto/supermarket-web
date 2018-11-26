import React from 'react';

import { Card, Divider } from 'antd';

import './style.css';

export default props => (
  <Card className="purchase-details">
    <h3>Resumen de Compra</h3>
    <Divider />
    <div>
      <span>Productos ()</span>
      <span className="right">$222</span>
    </div>
    <div>
      <span>Descuento</span>
      <span className="right">$0</span>
    </div>
    <Divider />
    <div>
      <span>Total</span>
      <span className="right">$222</span>
    </div>
  </Card>
);
