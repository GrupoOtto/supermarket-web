import React from 'react';

import { Card, InputNumber, Button } from 'antd';
import Price from '../../../../components/product/components/price';

import './style.css';

export default props => (
  <Card className="product-details">
    <h2>{props.name}</h2>
    <Price price={props.salePrice} left />
    <div>
      Cantidad: <InputNumber min={1} max={99} defaultValue={1} />
    </div>
    <div className="btns-section">
      <Button size="large" type="primary">
        Comprar Ahora
      </Button>
      <Button size="large">Agregar Al Carrito</Button>
    </div>
  </Card>
);
