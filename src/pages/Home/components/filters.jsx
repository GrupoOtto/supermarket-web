import React, { useState } from 'react';

import { Card, Slider } from 'antd';
import './style.css';

export default props => {
  const [values, setValues] = useState([0, 100]);

  return (
    <Card id="filters">
      <small className="price-selector">Precio</small>
      <Slider range defaultValues={values} onChange={setValues} />
      <div>
        <small>min: ${values[0]}</small>
        <small>max: ${values[1]}</small>
      </div>
    </Card>
  );
};
