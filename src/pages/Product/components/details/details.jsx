import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prepareSale } from '../../../../store/purchase/actions';
import { addToCardAndInform } from '../../../../store/cart/actions';

import { Link } from 'react-router-dom';

import { Card, Button } from 'antd';
import InputNumber from '../../../../components/input/inputNumber';
import Price from '../../../../components/product/components/price';

import './style.css';

const details = ({ product, prepareSale, addToCardAndInform }) => {
  const [amount, setAmount] = useState(1);

  return (
    <Card className="product-details">
      <h2>{product.name}</h2>
      <Price price={product.final} left />
      <div>
        Cantidad: <InputNumber onChange={setAmount} />
      </div>
      <div className="btns-section">
        <Button
          size="large"
          type="primary"
          onClick={() => prepareSale({ [product._id]: amount })}
        >
          <Link to={'/checkout'}>Comprar Ahora</Link>
        </Button>

        <Button
          size="large"
          onClick={() => addToCardAndInform(product, amount)}
        >
          Agregar Al Carrito
        </Button>
      </div>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCardAndInform, prepareSale }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(details);
