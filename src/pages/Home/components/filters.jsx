import React from 'react';

import { Card, Slider } from 'antd';
import './style.css';

export default props => {
  const values = [props.minPrice, props.maxPrice];
  return (
    <Card id="filters" loading={props.loading}>
      <small className="price-selector">Precio</small>
      <Slider
        range
        defaultValue={props.values}
        onChange={props.onChange}
        min={props.minPrice}
        max={props.maxPrice}
      />
      <div>
        <small>min: ${props.values[0]}</small>
        <small>max: ${props.values[1]}</small>
      </div>
    </Card>
  );
};
