import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { isLogged } from '../../store/login/getters';

import Form from './form/form';

import logo from '../../img/logo.png';
import './style.css';

const login = ({ logged }) => {
  return (
    <div id="login-container">
      {logged ? <Redirect to="/" /> : null}
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1 id="login-title">Ingresá a tu Cuenta</h1>
      <Form />
    </div>
  );
};

export default connect(isLogged)(login);
