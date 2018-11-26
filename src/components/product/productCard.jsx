import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCardAndInform } from '../../store/actions/cartActions';

import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';

import Price from './components/price';

import './style.css';

const product = props => (
  <Card
    className="product-card"
    hoverable
    cover={<img alt="product" src={props.product.images[0]} />}
    actions={[
      <Link to={`/products/${props.product._id}`}>
        <Icon type="eye" />
      </Link>,
      <Icon
        type="shopping-cart"
        onClick={() => props.addToCardAndInform(props.product, 1)}
      />
    ]}
  >
    <span className="product-name">{props.product.name}</span>
    <Price price={props.product.salePrice} />
  </Card>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCardAndInform }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(product);
