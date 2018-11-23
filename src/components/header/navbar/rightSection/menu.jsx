import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Badge } from 'antd';

import './style.css';

export default () => (
  <div className="navbar-menu">
    <NavLink to="/login">
      <Icon type="user" />
    </NavLink>
    <NavLink to="/cart">
      <Badge count={5}>
        <Icon type="shopping-cart" />
      </Badge>
    </NavLink>
  </div>
);
