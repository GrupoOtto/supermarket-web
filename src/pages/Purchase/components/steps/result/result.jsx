import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

export default ({ success }) => (
  <div style={{ textAlign: 'center' }}>
    <h2>
      <Icon type={success ? 'check-circle' : 'close-circle'} /> Compra
      {success ? ' Exitosa' : ' fallida'}
    </h2>
    <div>
      {success
        ? 'En la próxima hora nos contactaremos para coordinar el envio.'
        : 'Intenta nuevamente'}
    </div>
    <Link to="/cart">
      <Button className="cart-btn">Ir al Carrito</Button>
    </Link>
    <Link to="/">
      <Button type="primary">Volver al inicio</Button>
    </Link>
  </div>
);
