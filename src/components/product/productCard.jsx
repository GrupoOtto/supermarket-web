import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCardAndInform } from '../../store/cart/actions';

import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';

import Price from './components/price';

import './style.css';

const product = ({ product, addToCardAndInform }) => (
  <Card
    className="product-card"
    hoverable
    cover={
      <Link to={`/products/${product._id}`}>
        <img
          alt="product"
          src={
            product.images[0] ||
            `https://picsum.photos/273/140/?random&gravity=center&key=${
              product._id
            }`
          }
        />
      </Link>
    }
    actions={[
      <Link to={`/products/${product._id}`}>
        <Icon type="eye" />
      </Link>,
      <Icon
        type="shopping-cart"
        onClick={() => addToCardAndInform(product, 1)}
      />
    ]}
  >
    <span className="product-name">{product.name}</span>
    <Price price={product.final} />
  </Card>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCardAndInform }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(product);
