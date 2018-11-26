import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCardAndInform } from '../../../../store/actions/cartActions';

import { Card, Button } from 'antd';
import InputNumber from '../../../../components/input/inputNumber';
import Price from '../../../../components/product/components/price';

import './style.css';

const details = props => {
  const [value, setValue] = useState(1);

  return (
    <Card className="product-details">
      <h2>{props.product.name}</h2>
      <Price price={props.product.salePrice} left />
      <div>
        Cantidad: <InputNumber onChange={setValue} />
      </div>
      <div className="btns-section">
        <Button size="large" type="primary">
          Comprar Ahora
        </Button>
        <Button
          size="large"
          onClick={() => props.addToCardAndInform(props.product, value)}
        >
          Agregar Al Carrito
        </Button>
      </div>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCardAndInform }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(details);
