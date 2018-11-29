import React from 'react';

import { connect } from 'react-redux';
import { getPriceRange } from '../../../../store/products/getters';

import { Card, Slider } from 'antd';
import './style.css';

const filters = props => {
  const min = Math.trunc(props.minProduct.final) || 0;
  const max = Math.trunc(props.maxProduct.final) || 0;
  return (
    <Card id="filters" loading={props.loading}>
      <small className="price-selector">Precio</small>
      <Slider
        range
        onAfterChange={props.onAfterChange}
        defaultValue={[min, max]}
        min={min}
        max={max}
        disabled={min === max}
      />
      <div>
        <small>min: ${props.values[0] !== 0 ? props.values[0] : min}</small>
        <small>
          max: ${props.values[1] !== Infinity ? props.values[1] : max}
        </small>
      </div>
    </Card>
  );
};

export default connect(getPriceRange)(filters);
