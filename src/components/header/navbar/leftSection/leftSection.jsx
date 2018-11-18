import React, { Fragment } from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../../../img/logo.png';

export default props => (
  <Fragment>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <Button
      className={`btn ${props.hide ? '' : 'hide'}`}
      onClick={props.onClick}
    >
      <Icon type="ellipsis" />
    </Button>
  </Fragment>
);
