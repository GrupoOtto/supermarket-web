import React from 'react';

import { Button } from 'antd';

import './style.css';

const baseError = props => {
  return (
    <div className="errores">
      <h2>{props.title}</h2>
      <section>{props.body}</section>
      <Button className="errorPage-btn">Volver al inicio</Button>
    </div>
  );
};

export default baseError;
