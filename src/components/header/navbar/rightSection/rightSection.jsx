import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearch } from '../../../../store/ui/actions';

import { Row, Col } from 'antd';
import Search from '../../../searcher/searcher';
import Menu from './menu';

const rightSection = ({ setSearch }) => (
  <Row>
    <Col sm={17}>
      <Search onChange={setSearch} />
    </Col>
    <Col sm={7}>
      <Menu />
    </Col>
  </Row>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSearch }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(rightSection);
