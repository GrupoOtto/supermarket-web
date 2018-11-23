import React from 'react';

import './style.css';

const products = true;

class Cart extends Component {
  render() {
    return (
      <div id="cart-container">
        <Card title={`Mi Canasta (${5})`} id="cart-card">
          {products ? <ProductList /> : <Empty />}
        </Card>
      </div>
    );
  }
}

export default Cart;
