import React from 'react';
import { sumBy, keys } from 'lodash';
import { Card, Divider } from 'antd';

import './style.css';

export default ({ products, total, loading, coupon, purchase, calculated }) => {
  const amount =
    products.length !== 0
      ? sumBy(products, p => parseInt(p.amount))
      : sumBy(keys(purchase), p => purchase[p]);

  const subtotal =
    products.length !== 0
      ? sumBy(products, p => parseInt(p.final) * parseInt(p.amount))
      : sumBy(calculated, p => p.final * purchase[p._id]);

  return (
    <Card className="purchase-details" loading={loading && !coupon}>
      <h3>Resumen de Compra</h3>
      <Divider />
      <div>
        <span>Productos ({amount})</span>
      </div>
      {coupon ? (
        <div>
          <span>Descuento</span>
          <span className="right">
            {coupon.off.mark === '$'
              ? `$${coupon.off.value}`
              : `${coupon.off.value}%`}
          </span>
        </div>
      ) : null}
      <Divider />
      <div>
        <span>Total</span>
        <span className="right">
          ${subtotal > total ? subtotal.toFixed(2) : total.toFixed(2)}
        </span>
      </div>
    </Card>
  );
};
