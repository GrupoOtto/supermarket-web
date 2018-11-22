import React from 'react';

import { Card, Slider, Divider } from 'antd';

export default props => (
  <Card style={{ marginTop: 10 }}>
    <Divider />
    <Slider range defaultValue={[20, 50]} />
  </Card>
);
