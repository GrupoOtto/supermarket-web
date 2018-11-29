import React, { Fragment } from 'react';
import { Avatar, Menu, Dropdown, Icon, message } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../../store/login/getters';
import { logout } from '../../../../store/login/actions';

const onClick = logout => ({ key }) => {
  if (key === 'logout') {
    message.success('Sesión cerrada correctamente.');
    logout();
  }
};

const User = ({ user, logout }) => {
  const menu = (
    <Menu onClick={onClick(logout)}>
      <Menu.Item key="username">{user.username}</Menu.Item>
      <Menu.Item key="logout">Cerrar Sesión</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div style={{ height: '52px', lineHeight: '55px' }}>
        <Avatar size="small" src={user.avatar} />
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
