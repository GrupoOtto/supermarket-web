import React from 'react';
import Form from './form/form';

import logo from '../../img/logo.png';
import './style.css';

export default () => {
  return (
    <div id="login-container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1 id="login-title">Ingresá a tu Cuenta</h1>
      <Form />
    </div>
  );
};
