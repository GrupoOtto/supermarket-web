import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const style = {
  fontFamily: 'BogleWeb, Helvetica Neue, Helvetica, Arial, sans-serif'
};

export default () => (
  <div style={{ textAlign: 'center', padding: '15px 0px' }}>
    <h1 style={style}>Tu carrito está vacío</h1>
    <Link to="/">
      <Button type="primary">Volver al inicio</Button>
    </Link>
  </div>
);
