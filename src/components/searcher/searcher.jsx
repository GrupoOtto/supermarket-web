import React from 'react';
import { Input, Icon } from 'antd';

import './style.css';

export default ({ onChange }) => (
  <Input
    onChange={onChange}
    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    className="searcher"
    placeholder="Buscar Productos..."
  />
);
