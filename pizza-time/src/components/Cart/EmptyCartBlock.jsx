import React from 'react';
import classes from './CartBlock.module.scss';
import emptyCart from '../../assets/image/emptyCart.png';

function EmptyCartBlock() {
  return (
    <div className={classes.cartBlock}>
      <img src={emptyCart} />
      <h2>Корзина пустая</h2>
    </div>
  );
}

export default EmptyCartBlock;
