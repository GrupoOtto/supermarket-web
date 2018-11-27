import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Footer from './components/footer/footer';
import Login from './pages/Login/login';
import Routes from './pages/routes';
import history from './history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default () => (
  <Router history={history}>
    <App />
  </Router>
);
