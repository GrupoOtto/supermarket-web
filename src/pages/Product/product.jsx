import React, { Component } from 'react';

import { Row } from 'antd';
import Col from '../../components/grid/col';
import Carousel from '../../components/carousel/carousel';
import Details from './components/card/card';
import RelatedProducts from './components/relatedProducts/relatedProducts';

import products from '../Home/products';

export default class Product extends Component {
  render() {
    return (
      <div style={{ margin: '40px' }}>
        <Row gutter={48}>
          <Col md={15}>
            <Carousel
              images={[
                'https://i5.walmartimages.com/asr/cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
                'https://i5.walmartimages.com/asr/cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff'
              ]}
            />
          </Col>
          <Col md={9}>
            <Details {...products[0]} />
          </Col>
        </Row>
        <RelatedProducts products={products.slice(0, 4)} />
      </div>
    );
  }
}
