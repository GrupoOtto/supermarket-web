import React from 'react';

import {Icon, Row, Col} from "antd"

import "./style.css"

export default () =>  (
    <Row className="navbar-menu">
        <Col id="login" sm={18} xs={12}>
            <Icon type="user"/>
        </Col>
        <Col sm={6} xs={12}>
            <Icon type="shopping-cart" />
        </Col>
    </Row>
);