import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getCategories } from '../../../store/products/getters';

import { Layout } from 'antd';
import Category from './category';

import './style.css';

const { Header } = Layout;

const getCategory = location => location.pathname.split('/')[2];

const categories = ({ categories, location }) => {
  const active = getCategory(location);
  return (
    <Header className="header" id="categories">
      <div className="header-container">
        {categories.map((c, i) => (
          <Category key={i} category={c} active={c.toLowerCase() === active} />
        ))}
      </div>
    </Header>
  );
};

export default withRouter(connect(getCategories)(categories));
