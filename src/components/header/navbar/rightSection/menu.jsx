import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Row, Col, Badge } from 'antd';

import './style.css';

export default () => (
  <Row className="navbar-menu">
    <Col id="login" xs={10}>
      <NavLink to="/login">
        <Icon type="user" />
      </NavLink>
    </Col>
    <Col xs={10}>
      <NavLink to="/cart">
        <Badge count={5}>
          <Icon type="shopping-cart" />
        </Badge>
      </NavLink>
    </Col>
  </Row>
);
