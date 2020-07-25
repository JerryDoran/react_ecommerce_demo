import React, { Component } from 'react';
import Product from './Product';
import { Title } from './Title';
import { storeProducts } from '../data';
import { ProductContextConsumer } from '../context/ProductContext';
import { createGlobalStyle } from 'styled-components';

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            {/* Parent component passing down two props to the Title (child) component */}
            <Title name='our' title='products' />
            <div className='row'>
              <ProductContextConsumer>
                {(value) => {
                  console.log(value);
                }}
              </ProductContextConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
