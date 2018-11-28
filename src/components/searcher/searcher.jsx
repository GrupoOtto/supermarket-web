import React from 'react';
import { Input, Icon } from 'antd';
import history from '../../history';
import './style.css';

const search = value => {
  const pathname = history.location.pathname;
  const url = pathname.startsWith('/category') ? pathname : '/';

  history.push(`${url}${value ? '?search=' + value : ''}`);
};

export default () => (
  <Input
    onChange={e => search(e.target.value)}
    defaultValue={
      history.location.search ? history.location.search.split('=')[1] : ''
    }
    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    className="searcher"
    placeholder="Buscar Productos..."
  />
);
