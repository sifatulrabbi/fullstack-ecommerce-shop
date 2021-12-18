import React from 'react';
import { CartContainer } from './cart.styles';

export function CartPage(): React.ReactElement {
  return (
    <CartContainer className='container-padding'>
      <h1 className='title'>Your Cart</h1>
    </CartContainer>
  );
}
