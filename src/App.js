import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login/login';
import Routes from './pages/routes';
import Footer from './components/footer/footer';

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
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
