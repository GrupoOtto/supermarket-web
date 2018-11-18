import React from 'react';
import { Icon } from 'antd';

export default props => (
  <div className="category">
    <Icon type={props.type} />
    <small>{props.name}</small>
  </div>
);
