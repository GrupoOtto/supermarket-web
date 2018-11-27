import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon, Badge } from 'antd';

import { getCartAmount } from '../../../../store/getters';
import User from './User';

import './style.css';

const menu = props => (
  <div className="navbar-menu">
    <User />
    <NavLink to="/cart">
      <Badge count={props.cartAmount}>
        <Icon type="shopping-cart" />
      </Badge>
    </NavLink>
  </div>
);

export default connect(getCartAmount)(menu);
