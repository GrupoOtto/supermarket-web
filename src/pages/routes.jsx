import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header/header';
import Home from './Home/home';
import Error from './Error/404';
import Product from './Product/product';
import ShoppingCart from './ShoppingCart/shoppingCart';
import Purchase from './Purchase/purchase';

export default () => (
  <Fragment>
    <Header />
    <div className="main-container">
      <Switch>
        <Route path="/cart" exact component={ShoppingCart} />
        <Route path="/checkout" component={Purchase} />
        <Route path="/products/:id" component={Product} />
        <Route path="/category/:category" component={Home} />
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  </Fragment>
);
