import React from 'react';
import { Input, Icon } from 'antd';

import './style.css';

export default props => (
  <Input
    onChange={console.log}
    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    className="searcher"
    placeholder="Buscar Productos, Precios y más..."
  />
);
