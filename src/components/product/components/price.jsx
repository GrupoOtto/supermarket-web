import React from 'react';

import './style.css';

export default props => {
  const price = props.price
    .toFixed(2)
    .toString()
    .split('.');
  return (
    <div className="price-section">
      <span className="price">$</span>
      <span className="price-value">{price[0]}</span>
      <span className="price-decimal">{price[1] || '00'}</span>
    </div>
  );
};
