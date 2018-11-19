import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header/header';
import Home from './Home/home';
import ShoppingCart from './ShoppingCart/shoppingCart';
import Error from './Error/404';

export default () => (
  <Fragment>
    <Header />
    <div style={{ margin: '40px 20px 80px' }}>
      <Switch>
        <Route path="/chart" exact component={ShoppingCart} />
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  </Fragment>
);
