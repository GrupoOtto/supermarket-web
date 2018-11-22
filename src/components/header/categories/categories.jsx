import React from 'react';
import { Layout } from 'antd';

import Category from './category';

import './style.css';

const { Header } = Layout;

const categories = [
  { type: 'rest', name: 'Almacén' },
  { type: 'coffee', name: 'Bebidas' },
  { type: 'shop', name: 'Perfumeria' },
  { type: 'laptop', name: 'Electro' },
  { type: 'skin', name: 'Textil' },
  { type: 'home', name: 'Hogar' }
];

export default () => (
  <Header className="header" id="categories">
    <div className="header-container">
      {categories.map((c, i) => (
        <Category key={i} type={c.type} name={c.name} />
      ))}
    </div>
  </Header>
);
