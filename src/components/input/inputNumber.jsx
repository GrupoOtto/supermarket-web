import React from 'react';

import { InputNumber } from 'antd';

export default props => (
  <InputNumber {...props} min={1} max={99} defaultValue={1} />
);
