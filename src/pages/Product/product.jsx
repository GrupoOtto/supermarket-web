import React from 'react';
import { connect } from 'react-redux';

import { Row } from 'antd';
import Col from '../../components/grid/col';
import Carousel from '../../components/carousel/carousel';
import Details from './components/details/details';
import RelatedProducts from './components/relatedProducts/relatedProducts';
import Error from '../Error/404';

const product = props => {
  const product = props.products.find(
    x => x._id.toString() === props.match.params.id
  );

  return product ? (
    <div style={{ margin: '40px' }}>
      <Row gutter={48}>
        <Col xs={24} lg={15}>
          <Carousel images={product.images} />
        </Col>
        <Col xs={24} lg={9}>
          <Details product={product} />
        </Col>
      </Row>
      <RelatedProducts
        products={props.products.filter(x => x !== product).slice(0, 4)}
      />
    </div>
  ) : (
    <Error />
  );
};

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products
  };
};

export default connect(mapStateToProps)(product);
