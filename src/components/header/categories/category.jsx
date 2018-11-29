import React from 'react';
import history from '../../../history';
import { Icon } from 'antd';

const onClick = (path, active) => {
  const url = active ? '/' : `/category/${path}`;
  const search = history.location.search;
  history.push(url + search);
};

const Category = ({ category, active }) => {
  return (
    <div
      onClick={() => onClick(category.toLowerCase(), active)}
      className={`category ${active ? 'active' : ''}`}
    >
      <Icon type="home" />
      <small>{category}</small>
    </div>
  );
};

export default Category;
