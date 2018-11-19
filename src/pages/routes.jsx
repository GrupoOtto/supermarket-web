import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header/header';
import Home from './Home/home';
import Error from './Error/404';

export default () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={Error} />
    </Switch>
  </Fragment>
);
