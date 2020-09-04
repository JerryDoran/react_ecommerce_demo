import React, { Component } from 'react';
import { Title } from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContextConsumer } from '../../context/ProductContext';
import CartList from './CartList';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductContextConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name='your' title='cart' />
                  <CartColumns />
                  <CartList value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductContextConsumer>
      </section>
    );
  }
}
