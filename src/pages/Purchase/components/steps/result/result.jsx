import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

import './style.css';

export default ({ success }) => (
  <div className="result-step">
    <Icon type={success ? 'check-circle' : 'close-circle'} />
    <h1>
      Compra
      {success ? ' Exitosa' : ' fallida'}
    </h1>
    <div>
      {success
        ? 'En la próxima hora nos contactaremos para coordinar el envio.'
        : 'Intenta nuevamente'}
    </div>
    <div className="buttons-section">
      <Link to="/cart">
        <Button className="cart-btn">Ir al Carrito</Button>
      </Link>
      <Link to="/">
        <Button type="primary">Volver al inicio</Button>
      </Link>
    </div>
  </div>
);
