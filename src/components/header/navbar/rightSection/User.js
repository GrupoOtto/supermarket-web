import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { getUser as user } from '../../../../store/login/getters';

const Avatar = ({ user }) => <Avatar src={user.avatar} />;

const Login = () => (
  <NavLink to="/login">
    <Icon type="user" />
  </NavLink>
);

const User = ({ user }) => (user ? Avatar : Login);

export default connect({ user })(User);
