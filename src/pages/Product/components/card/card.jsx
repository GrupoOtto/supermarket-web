import React from 'react';

import { Card, Button } from 'antd';
import InputNumber from '../../../../components/input/inputNumber';
import Price from '../../../../components/product/components/price';

import './style.css';

export default props => (
  <Card className="product-details">
    <h2>{props.name}</h2>
    <Price price={props.salePrice} left />
    <div>
      Cantidad: <InputNumber />
    </div>
    <div className="btns-section">
      <Button size="large" type="primary">
        Comprar Ahora
      </Button>
      <Button size="large">Agregar Al Carrito</Button>
    </div>
  </Card>
);
