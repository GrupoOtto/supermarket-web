import React from 'react';
import { Link } from 'react-router-dom';

import Form from './form/form';

import logo from '../../img/logo.png';
import './style.css';

export default () => {
  return (
    <div id="login-container">
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
