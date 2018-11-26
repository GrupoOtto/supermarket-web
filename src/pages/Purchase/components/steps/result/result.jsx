import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

export default props => (
  <div style={{ textAlign: 'center' }}>
    <h2>
      <Icon type="check-circle" /> Compra Exitosa
    </h2>
    <div>En la próxima hora nos contactaremos para coordinar el envio.</div>
    <Link to="/cart">
      <Button className="cart-btn">Ir al Carrito</Button>
    </Link>
    <Link to="/">
      <Button type="primary">Volver al inicio</Button>
    </Link>
  </div>
);
