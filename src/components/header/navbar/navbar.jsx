import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Divider } from 'antd';

import RightSection from './rightSection/rightSection';
import LeftSection from './leftSection/leftSection';
import './style.css';

const { Header } = Layout;

const checkResponsiveness = width => {
  const [hide, setHide] = useState(window.innerWidth <= width);
  useEffect(() => {
    const handleResize = () => setHide(window.innerWidth <= width);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return hide;
};

export default () => {
  const hide = checkResponsiveness(768);
  const [show, setShow] = useState(false);

  return (
    <Header className="header" id="navbar">
      <Row className="header-container">
        <Col xxl={4} md={5} sm={24} style={{ textAlign: 'center' }}>
          <LeftSection hide={hide} onClick={() => setShow(!show)} />
        </Col>
        <Col md={1} xs={0}>
          <Divider type="vertical" />
        </Col>
        <Col xxl={19} md={18} sm={24} className={!show && hide ? 'hide' : ''}>
          <RightSection />
        </Col>
      </Row>
    </Header>
  );
};
