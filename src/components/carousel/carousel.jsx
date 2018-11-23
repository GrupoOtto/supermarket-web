import React from 'react';

import { Carousel, Card } from 'antd';
import './style.css';

export default ({ images }) => (
  <Card>
    <Carousel autoplay>
      {images.map((i, k) => (
        <img src={i} key={k} />
      ))}
    </Carousel>
  </Card>
);
