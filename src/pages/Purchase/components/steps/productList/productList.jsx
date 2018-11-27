import React from 'react';

import Product from './product';
import { Divider, Input, Button } from 'antd';

const Search = Input.Search;

export default ({ products, purchase, onSubmit }) => (
  <div>
    {products.map((p, i) => (
      <Product key={i} product={p} amount={purchase[p._id]} />
    ))}
    <h3 className="title-discount">Descuento</h3>
    <Divider />
    <Search
      style={{ maxWidth: 400, marginBottom: 10 }}
      placeholder="Ingresá tu cupón"
      enterButton="Aplicar"
      onSearch={value => console.log(value)}
    />
    <Button
      type="primary"
      className="next-btn"
      onClick={onSubmit}
      style={{ marginTop: 0 }}
    >
      Continuar
    </Button>
  </div>
);
