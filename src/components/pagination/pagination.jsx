import React from 'react';

import { Pagination } from 'antd';

import './style.css';

export default props => (
  <div className="pagination">
    <Pagination {...props} hideOnSinglePage={true} />
  </div>
);
