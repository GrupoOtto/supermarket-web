import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header/header';
import Error from './Error/404';

export default () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/" exact render={() => <div>gdfgfd</div>} />
      <Route component={Error} />
    </Switch>
  </Fragment>
);
