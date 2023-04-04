import React from 'react';
import cart from '../../assets/image/cart.svg';
import trash from '../../assets/image/trash.svg';
import plus from '../../assets/image/plus.svg';

function CartBlock() {
  return (
    <div class="cart">
      <div class="cart__top">
        <h2 class="content__title">
          {' '}
          <img src={cart} /> Корзина
        </h2>
        <div class="cart__clear">
          <img src={trash} />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div class="content__items">
        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">
              <img src={plus} />
            </div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">plus.svg</div>
          </div>
          <div class="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">plus.svg</div>
          </div>
        </div>

        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">plus.svg</div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">plus.svg</div>
          </div>
          <div class="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">plus.svg</div>
          </div>
        </div>

        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">plus.svg</div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">plus.svg</div>
          </div>
          <div class="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">plus.svg</div>
          </div>
        </div>

        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">plus.svg</div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">plus.svg</div>
          </div>
          <div class="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">plus.svg</div>
          </div>
        </div>
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>
            {' '}
            Всего пицц: <b>3 шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>900 ₽</b>{' '}
          </span>
        </div>
        <div class="cart__bottom-buttons">
          <a href="/" class="button button--outline button--add go-back-btn">
            grey-arrow-left.svg
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
