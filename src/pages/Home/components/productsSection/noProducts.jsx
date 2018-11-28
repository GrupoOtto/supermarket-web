import React from 'react';
import history from '../../../../history';
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

const noResults = () => {
  const search = history.location.search
    ? history.location.search.split('=')[1]
    : '';
  return (
    <Card style={style}>
      <h1>
        <Icon
          type="shopping-cart"
          style={{ fontSize: '120px', margin: '0px' }}
        />
      </h1>
      <h2 style={styleh3}>
        No se encontraron resultados
        {search ? ` con la palabra "${search}"` : ''}
      </h2>
    </Card>
  );
};

export default noResults;
