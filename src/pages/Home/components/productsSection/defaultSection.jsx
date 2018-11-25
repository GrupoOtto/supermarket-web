import React, { Fragment } from 'react';

import Product from '../../../../components/product/mockProduct';

export default props => {
  const cards = Array.from(Array(6).keys());

  return (
    <Fragment>
      {cards.map(i => (
        <Product key={i} />
      ))}
    </Fragment>
  );
};
