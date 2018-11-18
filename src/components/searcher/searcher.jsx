import React from 'react';
import { Input, Icon } from 'antd';

import './style.css';

export default props => (
  <Input
    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    className="searcher"
    placeholder="Buscar Productos, Marcas y más..."
  />
);
