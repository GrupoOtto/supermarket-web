import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPurchase } from '../../../../store/purchase/actions';
import { addToCardAndInform } from '../../../../store/cart/actions';

import { Link } from 'react-router-dom';

import { Card, Button } from 'antd';
import InputNumber from '../../../../components/input/inputNumber';
import Price from '../../../../components/product/components/price';

import './style.css';

const details = props => {
  const [amount, setAmount] = useState(1);

  return (
    <Card className="product-details">
      <h2>{props.product.name}</h2>
      <Price price={props.product.salePrice} left />
      <div>
        Cantidad: <InputNumber onChange={setAmount} />
      </div>
      <div className="btns-section">
        <Button
          size="large"
          type="primary"
          onClick={() =>
            props.setPurchase({ [props.product._id]: amount }, 'product')
          }
        >
          <Link to={'/checkout'}>Comprar Ahora</Link>
        </Button>

        <Button
          size="large"
          onClick={() => props.addToCardAndInform(props.product, amount)}
        >
          Agregar Al Carrito
        </Button>
      </div>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCardAndInform, setPurchase }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(details);
