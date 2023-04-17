import React from 'react';
import trash from '../../assets/image/trash.svg';
import { useDispatch } from 'react-redux';
import { addItem, decreaseItem, deleteItem } from '../../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div class="cart__item">
      <div class="cart__item-img">
        <img class="pizza-block__image" src={item.img} alt="Pizza" />
      </div>
      <div class="cart__item-info">
        <h3>{item.title}</h3>
        <p>
          {item.type}, {item.size} см.
        </p>
      </div>
      <div class="cart__item-count">
        <div
          onClick={() => {
            dispatch(addItem(item));
          }}
          class="button button--outline button--circle cart__item-count-minus">
          <b>+</b>
        </div>
        <b>{item.count}</b>
        <div
          onClick={() => {
            dispatch(decreaseItem(item));
          }}
          class="button button--outline button--circle cart__item-count-plus">
          <b>-</b>
        </div>
      </div>
      <div class="cart__item-price">
        <b>{item.count * item.price} ₽</b>
      </div>
      <div class="cart__item-remove" onClick={() => dispatch(deleteItem(item.id))}>
        <div class="button button--outline button--circle">
          <img src={trash} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
