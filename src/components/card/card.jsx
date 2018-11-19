import React from 'react';

import { Card } from 'antd';

const style = {
  borderRadius: 8,
  boxShadow: ' 0 1px 5px 0 rgba(0, 0, 0, 0.15)',
  padding: ' 0px 10px'
};

export default props => (
  <Card {...props} style={style}>
    {props.children}
  </Card>
);
