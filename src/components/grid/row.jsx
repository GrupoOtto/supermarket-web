import React from 'react';

import { Row } from 'antd';

export default props => (
  <Row gutter={16} {...props}>
    {props.children}
  </Row>
);
