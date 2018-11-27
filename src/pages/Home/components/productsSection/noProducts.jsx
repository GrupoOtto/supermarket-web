import React from 'react';

import { Card, Icon } from 'antd';

const style = {
  width: '100%',
  textAlign: 'center',
  minHeight: '200px',
  padding: '50px',
  marginTop: 10
};

const styleh3 = {
  fontFamily: 'BogleWeb, Helvetica Neue, Helvetica, Arial, sans-serif'
};

export default props => {
  return (
    <Card style={style}>
      <h1>
        <Icon
          type="shopping-cart"
          style={{ fontSize: '120px', margin: '0px' }}
        />
      </h1>
      <h2 style={styleh3}>No se encontraron resultados</h2>
    </Card>
  );
};
