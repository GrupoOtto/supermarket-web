import React from 'react';

import { InputNumber } from 'antd';

export default props => (
  <InputNumber
    defaultValue={1}
    {...props}
    min={1}
    max={99}
    type="number"
    onChange={value => (value < 99 && value > 0 ? props.onChange(value) : null)}
  />
);
