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
        onChange={props.onChange}
        min={0}
        max={300}
      />
      <div>
        <small>min: </small>
        <small>max: </small>
      </div>
    </Card>
  );
};
