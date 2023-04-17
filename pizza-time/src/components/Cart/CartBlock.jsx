import React from 'react';
import cart from '../../assets/image/cart.svg';
import trash from '../../assets/image/trash.svg';
import CartItem from './CartItem';
import arrowLeft from '../../assets/image/grey-arrow-left.svg';
import EmptyCartBlock from './EmptyCartBlock';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';

function CartBlock() {
  const { count, totalPrice, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toClickClear = () => {
    dispatch(clearCart());
  };

  if (!items.length) {
    return <EmptyCartBlock />;
  }

  return (
    <div class="cart">
      <div class="cart__top">
        <h2 class="content__title">
          <img src={cart} alt="cartImage" /> Корзина
        </h2>
        <div class="cart__clear" onClick={toClickClear}>
          <img src={trash} alt="trashImage" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div class="content__items">
        {items.map((__, i) => (
          <CartItem key={i} item={items[i]} />
        ))}
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>
            Всего пицц: <b>{count} шт.</b>{' '}
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>{' '}
          </span>
        </div>
        <div class="cart__bottom-buttons">
          <a href="/" class="button button--outline button--add go-back-btn">
            <img src={arrowLeft} alt="arrowImage" />
            <span>Вернуться назад</span>
          </a>
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBlock;
