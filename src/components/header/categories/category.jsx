import React from 'react';
import history from '../../../history';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const onClick = (path, active) => {
  const url = active ? '/' : `/category/${path}`;
  const search = history.location.search;
  history.push(url + search);
};

const category = () => history.location.pathname.split('/')[2];

export default ({ title, name, type, description }) => {
  const active = category() === description;

  return (
    <div
      onClick={() => onClick(description, active)}
      className={`category ${active ? 'active' : ''}`}
    >
      <Icon type={type} />
      <small>{title}</small>
    </div>
  );
};
