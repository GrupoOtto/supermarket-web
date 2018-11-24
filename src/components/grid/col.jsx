import React from 'react';

import { Col } from 'antd';

export default props => (
  <Col {...props} span={6}>
    {props.children}
  </Col>
);
