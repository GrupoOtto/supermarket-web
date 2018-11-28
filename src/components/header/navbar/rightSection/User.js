import React, { Fragment } from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../../store/login/getters';
import { logout } from '../../../../store/login/actions';

const onClick = logout => ({ key }) => {
  if (key == 'logout') {
    logout();
  }
};

const User = ({ user, logout }) => {
  const menu = (
    <Menu onClick={onClick(logout)}>
      <Menu.Item key="username">{user.username}</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div style={{ height: '64px', lineHeight: '64px' }}>
        <Avatar src={user.avatar} />
      </div>
    </Dropdown>
  );
};

const Login = () => (
  <NavLink to="/login">
    <Icon type="user" />
  </NavLink>
);

const Display = props => (
  <Fragment>{props.user ? <User {...props} /> : <Login />}</Fragment>
);

export default connect(
  getUser,
  { logout }
)(Display);
