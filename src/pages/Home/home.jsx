import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../store/actions/productsActions';

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

  componentDidMount = () => {
    this.props.fetchProducts();
  };

  filterProducts = () => {
    const min = this.state.filter[0];
    const max = this.state.filter[1];
    return this.props.products.filter(
      p => p.salePrice >= min && p.salePrice <= max
    );
  };

  render() {
    const products = this.filterProducts();
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
