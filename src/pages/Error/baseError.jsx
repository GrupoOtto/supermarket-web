import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';

import './style.css';

const baseError = props => {
  const [redirect, setState] = useState(false);

  return (
    <div className="errores">
      {redirect ? <Redirect to="/" /> : null}
      <h2>{props.title}</h2>
      <section>{props.body}</section>
      <Button className="errorPage-btn" onClick={() => setState(true)}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default baseError;
