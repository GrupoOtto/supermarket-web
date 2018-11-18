import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon, Row, Col } from 'antd';

import './style.css';

export default () => (
  <Row className="navbar-menu">
    <Col id="login" xs={10}>
      <NavLink to="/login">
        <Icon type="user" />
      </NavLink>
    </Col>
    <Col xs={10}>
      <Icon type="shopping-cart" />
    </Col>
  </Row>
);
