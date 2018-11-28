import React from 'react';
import { Layout } from 'antd';

import Category from './category';

import './style.css';

const { Header } = Layout;

const categories = [
  { type: 'rest', title: 'Almacén', description: 'grocery' },
  { type: 'coffee', title: 'Bebidas', description: 'drinks' },
  { type: 'shop', title: 'Perfumeria', description: 'beauty' },
  { type: 'laptop', title: 'Electro', description: 'electronics' },
  { type: 'book', title: 'Libros', description: 'books' },
  { type: 'home', title: 'Hogar', description: 'food' }
];

export default () => (
  <Header className="header" id="categories">
    <div className="header-container">
      {categories.map((c, i) => (
        <Category
          key={i}
          type={c.type}
          title={c.title}
          description={c.description}
        />
      ))}
    </div>
  </Header>
);
