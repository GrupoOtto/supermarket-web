import React, { Fragment } from 'react';
import { Button, Icon } from 'antd';

import logo from './logo.png'

export default props => (
    <Fragment>
        <img src={logo} alt="logo"></img>
        <Button className={`btn ${props.hide ? "" : "hide"}`} onClick={props.onClick}>
        <Icon type="ellipsis" />
        </Button>
    </Fragment>
);