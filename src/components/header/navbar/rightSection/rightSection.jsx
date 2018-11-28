import React from 'react';

import { Row, Col } from 'antd';
import Search from '../../../searcher/searcher';
import Menu from './menu';

export default () => (
  <Row>
    <Col sm={17}>
      <Search />
    </Col>
    <Col sm={7}>
      <Menu />
    </Col>
  </Row>
);
