import React, { Component } from 'react';
import Product from './Product';
import { Title } from './Title';
import { ProductContextConsumer } from '../context/ProductContext';

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
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductContextConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
