import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from './store/products/actions';

import Footer from './components/footer/footer';
import Login from './pages/Login/login';
import Routes from './pages/routes';
import history from './history';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(App);
