import React, { Component } from 'react';

import { connect } from 'react-redux';
import { filterProducts } from '../../utils/filters';

import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import Filters from './components/filters/filters';
import ProductsSection from './components/productsSection/productsSection';

import './style.css';

class Home extends Component {
  state = {
    filter: [0, Infinity]
  };

  onFilterChange = values => {
    this.setState({ filter: values });
  };

  render() {
    const products = filterProducts(this.props.products, this.state.filter);
    return (
      <div>
        <Row style={{ margin: '0px 10px' }}>
          <Col xl={6} lg={6} xs={24}>
            <Filters
              loading={this.props.loading}
              values={this.state.filter}
              onAfterChange={this.onFilterChange}
            />
          </Col>
          <Col xl={17} lg={18} xs={24}>
            <ProductsSection loading={this.props.loading} products={products} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products,
    loading: state.productsReducer.loading,
    error: state.productsReducer.error
  };
};

export default connect(mapStateToProps)(Home);
